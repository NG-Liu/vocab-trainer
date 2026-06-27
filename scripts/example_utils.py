from __future__ import annotations

import json
import re
import urllib.parse
import urllib.request
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
    if text[-1] not in ".!?":
        text += "."
    return text


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
            with urllib.request.urlopen(request, timeout=20) as response:
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
                        if cleaned and cleaned not in examples:
                            examples.append(cleaned)
        if examples:
            return examples[0]

    return ""


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
