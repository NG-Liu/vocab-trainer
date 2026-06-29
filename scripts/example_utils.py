from __future__ import annotations

import json
import re
import urllib.parse
import urllib.request
import html
from functools import lru_cache
from concurrent.futures import ThreadPoolExecutor, as_completed


POS_RE = re.compile(r"^(adj|adv|ad|n|vt|vi|v|prep|conj|pron|num|art|aux|int|a)\.")
POS_SPACE_RE = re.compile(r"(?<!^)(?<!\s)(?=(?:adj|adv|ad|n|vt|vi|v|prep|conj|pron|num|art|aux|int|a)\.)")
POS_TEXT_RE = re.compile(r"((?:adj|adv|ad|n|vt|vi|v|prep|conj|pron|num|art|aux|int|a)\.)(?=[^\s])")

ABSTRACT_HINTS = (
    "状态",
    "程度",
    "关系",
    "过程",
    "方法",
    "理论",
    "性质",
    "质量",
    "价值",
    "力量",
    "意识",
    "观念",
    "文化",
    "经济",
    "社会",
    "政治",
    "法律",
    "责任",
    "权",
    "感",
    "情",
    "性",
    "主义",
    "趋势",
    "因素",
    "现象",
    "影响",
    "风险",
    "压力",
    "需求",
    "管理",
    "信息",
    "知识",
    "教育",
    "科技",
)

NOUN_ABSTRACT_TEMPLATES = [
    "We discussed {term} in class yesterday.",
    "The report mentioned {term} several times.",
    "People are still worried about {term}.",
    "The policy was designed to reduce {term}.",
    "Her speech focused on {term}.",
    "The changes increased {term} sharply.",
]

NOUN_CONCRETE_TEMPLATES = [
    "He put the water into {term_article}.",
    "She carried {term_article} into the room.",
    "The warehouse was full of {term_article}.",
    "A broken {term_article} sat by the door.",
    "They bought {term_article} for the farm.",
]

VERB_TEMPLATES = [
    "They decided to {term} the plan.",
    "We need to {term} the problem before Friday.",
    "The manager asked the team to {term} the proposal.",
    "She tried to {term} the results carefully.",
    "He refused to {term} the request.",
    "The government may {term} the rule soon.",
    "The teacher told us to {term} our work again.",
]

ADJ_TEMPLATES = [
    "The result was {term}.",
    "It seemed like a {term} idea at first.",
    "The room felt {term} after the renovation.",
    "A {term} change can help the team.",
    "The proposal looked {term} on paper.",
    "Her answer was short and {term}.",
]

ADV_TEMPLATES = [
    "She answered the question {term}.",
    "He spoke {term} during the interview.",
    "The machine ran {term} all night.",
    "They reacted {term} to the news.",
    "The crowd moved {term} toward the exit.",
]

OTHER_TEMPLATES = [
    "We used {term} in a simple example.",
    "The class reviewed {term} carefully.",
    "The teacher explained {term} again.",
    "The passage included {term} in context.",
]

AUTHORED_NOUN_TEMPLATES = [
    "Her {term} grew stronger after years of practice.",
    "The report raised a fresh question about {term}.",
    "The school gives students time to develop {term}.",
    "Their decision was shaped by a clear sense of {term}.",
    "The book offers a useful discussion of {term}.",
    "A lack of {term} can slow the whole project down.",
]

AUTHORED_VERB_TEMPLATES = [
    "The new policy will {term} the way the team works.",
    "She learned to {term} her time more carefully.",
    "The manager asked us to {term} the problem at once.",
    "Small changes can {term} the final result.",
    "They chose to {term} the plan before the deadline.",
    "The course teaches students how to {term} ideas clearly.",
]

AUTHORED_ADJ_TEMPLATES = [
    "The situation became {term} after the new evidence appeared.",
    "She gave a {term} answer in front of the whole class.",
    "The design looks simple, but the effect is surprisingly {term}.",
    "His tone was calm, though the issue itself was {term}.",
    "It was a {term} mistake, and everyone noticed it at once.",
    "The room felt more {term} after the lights were turned on.",
]

AUTHORED_ADV_TEMPLATES = [
    "She spoke {term} during the interview.",
    "The team responded {term} to the sudden change.",
    "He handled the question {term} and moved on.",
    "The car moved {term} through the narrow street.",
    "They worked {term} until the report was finished.",
]

AUTHORED_PERSON_NOUN_TEMPLATES = [
    "The {term} arrived early and reviewed the documents in silence.",
    "Everyone listened carefully when the {term} began to speak.",
    "The {term} asked for more time before making a final decision.",
    "A young {term} stood at the door waiting for instructions.",
]

AUTHORED_PLACE_NOUN_TEMPLATES = [
    "The {term} was still quiet when we got there in the morning.",
    "They met outside the {term} just before the ceremony began.",
    "The old {term} has become a familiar landmark in the city.",
    "Security was tightened around the {term} after the announcement.",
]

AUTHORED_CONCRETE_NOUN_TEMPLATES = [
    "He picked up the {term} and looked at it more closely.",
    "The {term} lay on the table beside a stack of papers.",
    "She kept the {term} in a drawer near the window.",
    "A damaged {term} was found near the back gate.",
]

AUTHORED_EVENT_NOUN_TEMPLATES = [
    "The {term} took place after weeks of careful preparation.",
    "Nobody expected the {term} to end so quickly.",
    "The sudden {term} changed the mood of the whole room.",
    "They were still discussing the {term} long after it was over.",
]

AUTHORED_INTRANSITIVE_VERB_TEMPLATES = [
    "The same problem may {term} again if we ignore the warning signs.",
    "Tensions began to {term} as the meeting went on.",
    "The pattern continued to {term} throughout the winter.",
    "Small disagreements can {term} even in a close team.",
]

AUTHORED_TRANSITIVE_VERB_TEMPLATES = [
    "The new policy may {term} the way the department works.",
    "She tried to {term} the problem before it grew worse.",
    "We need to {term} the issue before the deadline.",
    "The manager asked us to {term} the report one more time.",
]

TEMPLATE_PATTERNS = [
    re.compile(r"became a key point in the discussion\.$", re.I),
    re.compile(r"The result was .* enough to affect the plan\.$", re.I),
    re.compile(r"They tried to .* carefully\.$", re.I),
    re.compile(r"It seemed like a .* idea at first\.$", re.I),
    re.compile(r"The proposal looked .* on paper\.$", re.I),
    re.compile(r"A .* change can help the team\.$", re.I),
    re.compile(r"We used .* in a simple example\.$", re.I),
    re.compile(r"The class reviewed .* carefully\.$", re.I),
    re.compile(r"The teacher explained .* again\.$", re.I),
    re.compile(r"The passage included .* in context\.$", re.I),
]

DEFINITION_PATTERNS = [
    re.compile(r"^(?:Be|Being|Cause|Carry|Change|Cut|Deal|Determine|Excites?|Exist|Gain|Give|Grant|Hurt|Inflict|Keep|Level|Lose|Manage|Point|Request|Stick|Take|Tie)\b", re.I),
    re.compile(r"^(?:Not|Usually|Used)\b", re.I),
    re.compile(r"^The (?:dominion|issuer|larvae|personification|right)\b", re.I),
    re.compile(r"^To be carried in\b", re.I),
]

DEFINITION_SNIPPETS = (
    "somebody into a certain direction",
    "deal with ahead of time",
    "used in combination",
    "used as a combining form",
    "available only to persons authorized",
    "can be mounted in a frame",
    "to be carried in a woman's purse",
    "the personification of the infinity of space",
    "the right is purchased",
    "the issuer is required",
    "larvae feed on milkweed",
)


def normalize_space(value: str) -> str:
    return " ".join((value or "").replace("\xa0", " ").split()).strip()


def normalize_meaning(value: str) -> str:
    text = normalize_space(value)
    if not text:
        return text
    text = POS_SPACE_RE.sub(" ", text)
    text = POS_TEXT_RE.sub(r"\1 ", text)
    return normalize_space(text)


def detect_pos(meaning: str) -> str:
    match = POS_RE.match(normalize_space(meaning))
    return match.group(1) if match else ""


def has_abstract_hint(meaning: str) -> bool:
    text = normalize_space(meaning)
    return any(hint in text for hint in ABSTRACT_HINTS)


def article_phrase(term: str) -> str:
    clean = normalize_space(term)
    lower = clean.lower()
    if lower.startswith(("a ", "an ", "the ")):
        return clean
    article = "an" if lower[:1] in "aeiou" else "a"
    return f"{article} {clean}"


def expand_lookup_term(term: str) -> str:
    clean = normalize_space(term)
    clean = re.sub(r"\bsb\b", "someone", clean, flags=re.I)
    clean = re.sub(r"\bsth\b", "something", clean, flags=re.I)
    return clean


def clean_example_text(example: str) -> str:
    text = normalize_space(example)
    if not text:
        return text
    text = re.sub(r"\s+([,.;:!?])", r"\1", text)
    if text[-1] not in ".!?":
        text += "."
    return text


def clean_html_text(value: str) -> str:
    text = html.unescape(normalize_space(value))
    text = re.sub(r"\[[0-9]+\]", "", text)
    text = re.sub(r"\s+", " ", text).strip()
    text = re.sub(r"\s+([,.;:!?])", r"\1", text)
    if text and text[-1] not in ".!?":
        text += "."
    return text


def normalize_lookup_term(term: str) -> str:
    clean = normalize_space(term)
    clean = re.sub(r"\s*\(.*?\)\s*", " ", clean)
    clean = clean.replace("’", "'")
    return normalize_space(clean)


def term_forms(term: str) -> list[str]:
    base = normalize_lookup_term(term).lower()
    if not base:
        return []
    forms = [base]
    irregular_forms = {
        "admit": ["admitted", "admitting"],
        "bind": ["bound"],
        "blur": ["blurred", "blurring"],
        "cling": ["clung"],
        "swear": ["swore", "sworn"],
        "uphold": ["upheld"],
    }

    if base.endswith("y") and len(base) > 2 and base[-2] not in "aeiou":
        forms.extend([base[:-1] + "ies", base[:-1] + "ied"])
    if base.endswith("e"):
        forms.extend([base + "s", base + "d", base[:-1] + "ing"])
    else:
        forms.extend([base + "s", base + "ed", base + "ing"])
    if (
        len(base) >= 3
        and base[-1] not in "aeiouwxy"
        and base[-2] in "aeiou"
        and base[-3] not in "aeiou"
    ):
        forms.extend([base + base[-1] + "ed", base + base[-1] + "ing"])
    if base.endswith("ic"):
        forms.append(base + "ally")
    if "-" in base:
        forms.append(base.replace("-", " "))
    if base.endswith("t"):
        forms.append(base + "ly")
    forms.extend(irregular_forms.get(base, []))

    deduped: list[str] = []
    seen: set[str] = set()
    for form in forms:
        if not form or form in seen:
            continue
        seen.add(form)
        deduped.append(form)
    return deduped


def contains_term_form(example: str, term: str) -> bool:
    text = clean_html_text(example)
    if not text:
        return False
    for form in term_forms(term):
        if re.search(rf"\b{re.escape(form)}\b", text, re.I):
            return True
    return False


def looks_like_template_example(example: str) -> bool:
    text = clean_example_text(example)
    return any(pattern.search(text) for pattern in TEMPLATE_PATTERNS)


def looks_like_definition(example: str) -> bool:
    text = clean_example_text(example)
    if not text:
        return False
    if any(pattern.search(text) for pattern in DEFINITION_PATTERNS):
        return True
    lower = text.lower()
    return any(snippet in lower for snippet in DEFINITION_SNIPPETS)


def is_natural_example(example: str, term: str) -> bool:
    text = clean_html_text(example)
    if not text or looks_like_template_example(text) or looks_like_definition(text):
        return False
    words = re.findall(r"[A-Za-z']+", text)
    if len(words) < 4 or len(words) > 24:
        return False
    if len(text) < 18 or len(text) > 180:
        return False
    if not re.match(r"^[A-Z\"']", text):
        return False
    if text.endswith(" in.") or text.endswith(" on.") or text.endswith(" at.") or text.endswith(" of.") or text.endswith(" for.") or text.endswith(" with."):
        return False
    if "= " in text or "(= " in text:
        return False
    if text.count('"') % 2 == 1:
        return False
    if not contains_term_form(text, term):
        return False
    return True


def score_example(example: str, term: str, source: str) -> int:
    text = clean_html_text(example)
    words = len(re.findall(r"[A-Za-z']+", text))
    score = 0
    if source == "cambridge":
        score += 50
    elif source == "dictionaryapi":
        score += 40
    elif source == "tatoeba":
        score += 20
    elif source == "existing":
        score += 10
    elif source == "authored":
        score += 15

    base = normalize_lookup_term(term).lower()
    if re.search(rf"\b{re.escape(base)}\b", text, re.I):
        score += 20
    if 6 <= words <= 16:
        score += 12
    elif 4 <= words <= 20:
        score += 6
    if "'" not in text:
        score += 2
    if "Tom " not in text and "Mary " not in text:
        score += 2
    if text.endswith("?"):
        score -= 3
    return score


@lru_cache(maxsize=None)
def fetch_dictionary_example(term: str) -> str:
    candidates = []
    clean_term = normalize_space(term)
    if clean_term:
        candidates.append(clean_term)
        expanded = expand_lookup_term(clean_term)
        if expanded not in candidates:
            candidates.append(expanded)

    headers = {"User-Agent": "Mozilla/5.0", "Accept": "application/json"}
    for candidate in candidates:
        url = f"https://api.dictionaryapi.dev/api/v2/entries/en/{urllib.parse.quote(candidate, safe='')}"
        try:
            request = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(request, timeout=6) as response:
                payload = json.load(response)
        except Exception:
            continue

        if not isinstance(payload, list):
            continue

        examples: list[str] = []
        for entry in payload:
            for meaning in entry.get("meanings", []):
                for definition in meaning.get("definitions", []):
                    example = definition.get("example")
                    if example:
                        cleaned = clean_example_text(example)
                        if cleaned and not looks_like_definition(cleaned) and cleaned not in examples:
                            examples.append(cleaned)
        if examples:
            return examples[0]

    return ""


def fetch_dictionary_examples(term: str) -> list[dict[str, str]]:
    candidates = []
    clean_term = normalize_lookup_term(term)
    if clean_term:
        candidates.append(clean_term)
        expanded = expand_lookup_term(clean_term)
        if expanded not in candidates:
            candidates.append(expanded)

    headers = {"User-Agent": "Mozilla/5.0", "Accept": "application/json"}
    examples: list[dict[str, str]] = []
    seen_examples: set[str] = set()
    for candidate in candidates:
        url = f"https://api.dictionaryapi.dev/api/v2/entries/en/{urllib.parse.quote(candidate, safe='')}"
        try:
            request = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(request, timeout=6) as response:
                payload = json.load(response)
        except Exception:
            continue

        if not isinstance(payload, list):
            continue

        for entry in payload:
            word = entry.get("word") or candidate
            for meaning in entry.get("meanings", []):
                for definition in meaning.get("definitions", []):
                    example = clean_html_text(definition.get("example") or "")
                    if not example or looks_like_definition(example) or example in seen_examples:
                        continue
                    seen_examples.add(example)
                    examples.append(
                        {
                            "example": example,
                            "source": "dictionaryapi",
                            "lookup": candidate,
                            "word": word,
                        }
                    )
    return examples


def fetch_tatoeba_examples(term: str, per_page: int = 8) -> list[dict[str, str]]:
    headers = {"User-Agent": "Mozilla/5.0", "Accept": "application/json"}
    results: list[dict[str, str]] = []
    seen_examples: set[str] = set()
    for query in term_forms(term):
        url = (
            "https://tatoeba.org/en/api_v0/search?from=eng&to=eng&query="
            f"{urllib.parse.quote(query, safe='')}&page=1&per_page={per_page}"
        )
        try:
            request = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(request, timeout=6) as response:
                payload = json.load(response)
        except Exception:
            continue

        for item in payload.get("results", []):
            if item.get("lang") != "eng":
                continue
            example = clean_html_text(item.get("text") or "")
            if not example or example in seen_examples:
                continue
            seen_examples.add(example)
            user = item.get("user") or {}
            results.append(
                {
                    "example": example,
                    "source": "tatoeba",
                    "query": query,
                    "sentence_id": str(item.get("id") or ""),
                    "license": item.get("license") or "",
                    "username": user.get("username") or "",
                }
            )
    return results


def fetch_cambridge_examples(term: str, max_examples: int = 8) -> list[dict[str, str]]:
    headers = {"User-Agent": "Mozilla/5.0", "Accept": "text/html"}
    results: list[dict[str, str]] = []
    seen_examples: set[str] = set()
    for query in term_forms(term):
        url = "https://dictionary.cambridge.org/dictionary/english/" + urllib.parse.quote(query, safe="")
        try:
            request = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(request, timeout=6) as response:
                page = response.read().decode("utf-8", "ignore")
        except Exception:
            continue

        matches = re.findall(r'<span class="eg deg">(.*?)</span>', page, re.S)
        for match in matches:
            example = clean_html_text(re.sub(r"<.*?>", " ", match))
            if not example or example in seen_examples:
                continue
            seen_examples.add(example)
            results.append(
                {
                    "example": example,
                    "source": "cambridge",
                    "query": query,
                    "license": "Cambridge Dictionary website",
                }
            )
            if len(results) >= max_examples:
                return results
    return results


def build_authored_example(term: str, meaning: str, seed: int = 0) -> str:
    normalized_term = expand_lookup_term(term)
    pos = detect_pos(meaning)
    meaning_text = normalize_space(meaning)

    person_hints = ("人", "者", "员", "家", "官", "客", "生", "民", "士", "手")
    place_hints = ("馆", "局", "院", "部", "厅", "所", "站", "校", "堂", "馆舍", "大使馆")
    event_hints = ("会议", "行动", "活动", "战争", "战斗", "交易", "旅程", "讨论", "运动", "过程", "争论", "比赛")
    intransitive_hints = ("出现", "发生", "存在", "增长", "下降", "恢复", "反应", "持续", "参加", "复发", "来临", "上升", "衰退")

    if pos in {"vt", "vi", "v"}:
        if any(hint in meaning_text for hint in intransitive_hints):
            templates = AUTHORED_INTRANSITIVE_VERB_TEMPLATES
        else:
            templates = AUTHORED_TRANSITIVE_VERB_TEMPLATES
    elif pos in {"adj", "a"}:
        templates = AUTHORED_ADJ_TEMPLATES
    elif pos in {"adv", "ad"}:
        templates = AUTHORED_ADV_TEMPLATES
    else:
        if any(hint in meaning_text for hint in person_hints):
            templates = AUTHORED_PERSON_NOUN_TEMPLATES
        elif any(hint in meaning_text for hint in place_hints):
            templates = AUTHORED_PLACE_NOUN_TEMPLATES
        elif any(hint in meaning_text for hint in event_hints):
            templates = AUTHORED_EVENT_NOUN_TEMPLATES
        elif has_abstract_hint(meaning_text):
            templates = AUTHORED_NOUN_TEMPLATES
        else:
            templates = AUTHORED_CONCRETE_NOUN_TEMPLATES

    example = templates[seed % len(templates)].format(term=normalized_term)
    return clean_example_text(example)


def fetch_cambridge_examples(term: str, max_examples: int = 8) -> list[dict[str, str]]:
    headers = {"User-Agent": "Mozilla/5.0", "Accept": "text/html"}
    results: list[dict[str, str]] = []
    seen_examples: set[str] = set()
    for query in term_forms(term):
        url = "https://dictionary.cambridge.org/dictionary/english/" + urllib.parse.quote(query, safe="")
        try:
            request = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(request, timeout=20) as response:
                page = response.read().decode("utf-8", "ignore")
        except Exception:
            continue

        matches = re.findall(r'<span class="eg deg">(.*?)</span>', page, re.S)
        for match in matches:
            example = clean_html_text(re.sub(r"<.*?>", " ", match))
            if not example or example in seen_examples:
                continue
            seen_examples.add(example)
            results.append(
                {
                    "example": example,
                    "source": "cambridge",
                    "query": query,
                    "license": "Cambridge Dictionary website",
                }
            )
            if len(results) >= max_examples:
                return results
    return results


def build_fallback_example(term: str, meaning: str, seed: int) -> str:
    pos = detect_pos(meaning)
    normalized_term = expand_lookup_term(term)

    if pos in {"vt", "vi", "v"}:
        templates = VERB_TEMPLATES
        return templates[seed % len(templates)].format(term=normalized_term)

    if pos in {"adj", "a"}:
        templates = ADJ_TEMPLATES
        return templates[seed % len(templates)].format(term=normalized_term)

    if pos in {"adv", "ad"}:
        templates = ADV_TEMPLATES
        return templates[seed % len(templates)].format(term=normalized_term)

    if pos == "n":
        templates = NOUN_ABSTRACT_TEMPLATES if has_abstract_hint(meaning) else NOUN_CONCRETE_TEMPLATES
        if templates is NOUN_CONCRETE_TEMPLATES:
            return templates[seed % len(templates)].format(term_article=article_phrase(normalized_term))
        return templates[seed % len(templates)].format(term=normalized_term)

    templates = OTHER_TEMPLATES
    return templates[seed % len(templates)].format(term=normalized_term)


def build_example(term: str, meaning: str, seed: int) -> str:
    example = fetch_dictionary_example(term)
    if example:
        return example
    return build_fallback_example(term, meaning, seed)


def build_entries_with_examples(rows: list[tuple[str, str]], max_workers: int = 24) -> list[list[str]]:
    normalized_terms = []
    seen_terms: set[str] = set()
    for term, _meaning in rows:
        normalized = normalize_space(term)
        if not normalized or normalized in seen_terms:
            continue
        seen_terms.add(normalized)
        normalized_terms.append(normalized)

    fetched: dict[str, str] = {}
    if normalized_terms:
        with ThreadPoolExecutor(max_workers=max_workers) as executor:
            futures = {executor.submit(fetch_dictionary_example, term): term for term in normalized_terms}
            for future in as_completed(futures):
                term = futures[future]
                try:
                    fetched[term] = future.result()
                except Exception:
                    fetched[term] = ""

    entries: list[list[str]] = []
    for index, (term, meaning) in enumerate(rows):
        normalized_term = normalize_space(term)
        example = fetched.get(normalized_term, "")
        if not example:
            example = build_fallback_example(term, meaning, index)
        entries.append([term, meaning, example])
    return entries
