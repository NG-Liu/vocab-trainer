from __future__ import annotations

import json
import re
from pathlib import Path

import pdfplumber

from example_utils import build_entries_with_examples


POS_MARKER_NEEDS_SPACE = re.compile(
    r"(?<!^)(?<!\s)(?=(?:adj|adv|n|vt|vi|v|prep|conj|pron|num|art|aux)\.)"
)
POS_MARKER_FOLLOWED_BY_TEXT = re.compile(
    r"((?:adj|adv|n|vt|vi|v|prep|conj|pron|num|art|aux)\.)(?=[^\s])"
)


def normalize_space(value: str) -> str:
    return " ".join((value or "").replace("\xa0", " ").split()).strip()


def normalize_meaning(value: str) -> str:
    text = normalize_space(value)
    if not text:
        return text
    text = POS_MARKER_NEEDS_SPACE.sub(" ", text)
    text = POS_MARKER_FOLLOWED_BY_TEXT.sub(r"\1 ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def find_source_pdf(desktop: Path) -> Path:
    for pdf_path in sorted(desktop.glob("*.pdf")):
        try:
            with pdfplumber.open(pdf_path) as pdf:
                text = pdf.pages[0].extract_text() or ""
        except Exception:
            continue
        if "序号" in text and "单词" in text and "注音" in text and "释义" in text:
            return pdf_path
    raise FileNotFoundError("Could not find CET4 PDF on Desktop.")


def extract_entries(pdf_path: Path) -> list[list[str]]:
    rows: list[tuple[str, str]] = []
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            table = page.extract_table()
            if not table:
                continue
            for row in table:
                if not row or len(row) < 4:
                    continue
                serial, term, _phonetic, meaning = row[:4]
                serial_text = normalize_space(serial or "")
                term_text = normalize_space(term or "")
                meaning_text = normalize_meaning(meaning or "")
                if not serial_text.isdigit() or not term_text or not meaning_text:
                    continue
                if not re.search(r"[A-Za-z]", term_text):
                    continue
                rows.append((term_text, meaning_text))

    deduped_rows: list[tuple[str, str]] = []
    seen_terms: set[str] = set()
    for term, meaning in rows:
        key = term.casefold()
        if key in seen_terms:
            continue
        seen_terms.add(key)
        deduped_rows.append((term, meaning))
    return build_entries_with_examples(deduped_rows)


def write_output(entries: list[list[str]], output_path: Path) -> None:
    lines = [
        "// Generated from 大学英语四级词汇带音标-乱序版.pdf.\n",
        "window.CET4_BOOK_ENTRIES = [\n"
    ]
    for index, (term, meaning, example) in enumerate(entries):
        suffix = "," if index < len(entries) - 1 else ""
        lines.append(
            f"  [{json.dumps(term, ensure_ascii=False)}, {json.dumps(meaning, ensure_ascii=False)}, "
            f"{json.dumps(example, ensure_ascii=False)}]{suffix}\n"
        )
    lines.append("];\n")
    output_path.write_text("".join(lines), encoding="utf-8")


def main() -> None:
    workspace = Path.cwd()
    desktop = Path.home() / "Desktop"
    source_pdf = find_source_pdf(desktop)
    entries = extract_entries(source_pdf)
    output_path = workspace / "cet4-book-data.js"
    write_output(entries, output_path)
    print(f"source={source_pdf.name.encode('unicode_escape').decode('ascii')}")
    print(f"entries={len(entries)}")
    print(f"first={entries[0][0]}")
    print(f"last={entries[-1][0]}")
    print(f"output={output_path}")


if __name__ == "__main__":
    main()
