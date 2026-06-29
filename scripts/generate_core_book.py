from __future__ import annotations

import json
import re
import subprocess
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

import pdfplumber

from example_utils import (
    build_authored_example,
    clean_example_text,
    clean_html_text,
    fetch_cambridge_examples,
    fetch_dictionary_examples,
    fetch_tatoeba_examples,
    looks_like_definition,
    looks_like_template_example,
    is_natural_example,
    score_example,
)
from core_manual_examples import MANUAL_CORE_EXAMPLES


COMMENT_LINE = "// Generated from the six kaoyan core vocabulary PDFs.\n"
PDF_PATTERN = "*核心单词*.pdf"
LESSON_LINE_RE = re.compile(r"^Lesson\s+\d+\s*$", re.I)
VALID_TERM_RE = re.compile(r"^[A-Za-z][A-Za-z' -]*$")
POS_NEEDS_SPACE = re.compile(
    r"(?<!^)(?<!\s)(?=(?:adj|adv|ad|n|vt|vi|v|prep|conj|pron|num|art|aux|int|a)\.)"
)
POS_FOLLOWED_BY_TEXT = re.compile(
    r"((?:adj|adv|ad|n|vt|vi|v|prep|conj|pron|num|art|aux|int|a)\.)(?=[^\s])"
)


def normalize_space(value: str) -> str:
    return " ".join((value or "").replace("\xa0", " ").split()).strip()


def normalize_meaning(value: str) -> str:
    text = normalize_space(value)
    if not text:
        return text
    text = POS_NEEDS_SPACE.sub(" ", text)
    text = POS_FOLLOWED_BY_TEXT.sub(r"\1 ", text)
    return normalize_space(text)


def load_existing_entries(path: Path) -> list[list[str]]:
    text = path.read_text(encoding="utf-8")
    return json.loads(text.split("=", 1)[1].rsplit(";", 1)[0])


def load_committed_entries(workspace: Path) -> list[list[str]]:
    result = subprocess.run(
        ["git", "show", "HEAD:core-book-data.js"],
        cwd=workspace,
        capture_output=True,
        text=True,
        encoding="utf-8",
        check=True,
    )
    text = result.stdout
    return json.loads(text.split("=", 1)[1].rsplit(";", 1)[0])


def extract_terms_from_pdfs(downloads_dir: Path) -> list[str]:
    terms: list[str] = []
    seen_terms: set[str] = set()
    for pdf_path in sorted(downloads_dir.glob(PDF_PATTERN)):
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                text = page.extract_text() or ""
                for raw_line in text.splitlines():
                    line = normalize_space(raw_line)
                    if not line or LESSON_LINE_RE.match(line):
                        continue
                    line = line.replace("（美", " (美").replace("）", ")")
                    if not VALID_TERM_RE.fullmatch(line):
                        continue
                    key = line.casefold()
                    if key in seen_terms:
                        continue
                    seen_terms.add(key)
                    terms.append(line)
    return terms


def choose_best_example(term: str, meaning: str, existing_example: str, seed: int) -> tuple[str, dict[str, str]]:
    manual_example = MANUAL_CORE_EXAMPLES.get(term.casefold())
    if manual_example:
        return clean_example_text(manual_example), {"source": "manual"}

    cleaned_existing = clean_example_text(existing_example or "")
    candidates: list[tuple[int, str, dict[str, str]]] = []

    if cleaned_existing and not looks_like_template_example(cleaned_existing) and not looks_like_definition(cleaned_existing) and is_natural_example(cleaned_existing, term):
        return cleaned_existing, {"source": "existing"}

    source_batches = (
        fetch_cambridge_examples(term, 3),
        fetch_dictionary_examples(term),
        fetch_tatoeba_examples(term, 6),
    )

    for batch in source_batches:
        for payload in batch:
            example = clean_html_text(payload["example"])
            source = payload.get("source", "")
            if is_natural_example(example, term):
                candidates.append((score_example(example, term, source), example, payload))

    if candidates:
        candidates.sort(key=lambda item: (-item[0], len(item[1]), item[1]))
        _score, example, meta = candidates[0]
        return example, meta

    authored = build_authored_example(term, meaning, seed)
    return authored, {"source": "authored"}


def rebuild_entries(existing_entries: list[list[str]], expected_terms: list[str]) -> tuple[list[list[str]], list[dict[str, str]]]:
    entry_by_term = {term.casefold(): [term, normalize_meaning(meaning), clean_example_text(example)] for term, meaning, example in existing_entries}

    ordered_rows: list[list[str]] = []
    audit_rows: list[dict[str, str]] = []

    with ThreadPoolExecutor(max_workers=4) as executor:
        futures = {}
        for index, term in enumerate(expected_terms):
            current = entry_by_term.get(term.casefold())
            if not current:
                continue
            futures[executor.submit(choose_best_example, current[0], current[1], current[2], index)] = (index, current)

        finished: dict[int, tuple[list[str], dict[str, str]]] = {}
        for future in as_completed(futures):
            index, current = futures[future]
            example, meta = future.result()
            if example:
                current[2] = example
            finished[index] = (current, meta)

    for index, term in enumerate(expected_terms):
        current = entry_by_term.get(term.casefold())
        if not current:
            continue
        meta = finished.get(index, (current, {"source": "missing"}))[1]
        ordered_rows.append(current)
        audit_rows.append(
            {
                "term": current[0],
                "meaning": current[1],
                "example": current[2],
                "source": meta.get("source", "missing"),
                "license": meta.get("license", ""),
                "lookup": meta.get("lookup", meta.get("query", "")),
                "sentence_id": meta.get("sentence_id", ""),
                "username": meta.get("username", ""),
            }
        )

    return ordered_rows, audit_rows


def write_output(entries: list[list[str]], output_path: Path) -> None:
    lines = [COMMENT_LINE, "window.CORE_BOOK_ENTRIES = [\n"]
    for index, (term, meaning, example) in enumerate(entries):
        suffix = "," if index < len(entries) - 1 else ""
        lines.append("  [\n")
        lines.append(f"    {json.dumps(term, ensure_ascii=False)},\n")
        lines.append(f"    {json.dumps(meaning, ensure_ascii=False)},\n")
        lines.append(f"    {json.dumps(example, ensure_ascii=False)}\n")
        lines.append(f"  ]{suffix}\n")
    lines.append("];\n")
    output_path.write_text("".join(lines), encoding="utf-8")


def write_audit(audit_rows: list[dict[str, str]], output_path: Path) -> None:
    payload = {
        "source": "Cambridge + existing non-template examples + authored examples",
        "entries": audit_rows,
    }
    output_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def main() -> None:
    workspace = Path.cwd()
    downloads = Path.home() / "Downloads"
    expected_terms = extract_terms_from_pdfs(downloads)
    existing_entries = load_committed_entries(workspace)

    rebuilt_entries, audit_rows = rebuild_entries(existing_entries, expected_terms)

    output_path = workspace / "core-book-data.js"
    audit_path = workspace / "scripts" / "core-book-example-audit.json"
    write_output(rebuilt_entries, output_path)
    write_audit(audit_rows, audit_path)

    missing = sum(1 for row in audit_rows if row["source"] == "missing")
    authored = sum(1 for row in audit_rows if row["source"] == "authored")
    print(f"expected_terms={len(expected_terms)}")
    print(f"rebuilt_entries={len(rebuilt_entries)}")
    print(f"missing_examples={missing}")
    print(f"authored_examples={authored}")
    print(f"audit={audit_path}")


if __name__ == "__main__":
    main()
