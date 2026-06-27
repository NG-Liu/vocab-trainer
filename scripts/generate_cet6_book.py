from __future__ import annotations

import json
import re
from pathlib import Path

import pdfplumber

from example_utils import build_entries_with_examples


WATERMARK_CHARS = set("教育国际国教方际东新育")
POS_MARKER_NEEDS_SPACE = re.compile(
    r"(?<!^)(?<!\s)(?=(?:adj|adv|ad|n|vt|vi|v|prep|conj|pron|num|art|aux|int|a)\.)"
)
POS_MARKER_FOLLOWED_BY_TEXT = re.compile(
    r"((?:adj|adv|ad|n|vt|vi|v|prep|conj|pron|num|art|aux|int|a)\.)(?=[^\s])"
)
LEADING_NOISE = re.compile(r"^[^A-Za-z]+")
TERM_LINE = re.compile(r"[A-Za-z]")
TERM_ONLY_LINE = re.compile(r"^[A-Za-z][A-Za-z' -]*$")
MEANING_ONLY_LINE = re.compile(r"^(?:adj|adv|ad|n|vt|vi|v|prep|conj|pron|num|art|aux|int|a)\.")
POS_MARKER_RE = re.compile(r"(?:adj|adv|ad|n|vt|vi|v|prep|conj|pron|num|art|aux|int|a)\.")


def normalize_space(value: str) -> str:
    return " ".join((value or "").replace("\xa0", " ").split()).strip()


def strip_watermark(value: str) -> str:
    return "".join(ch for ch in value if ch not in WATERMARK_CHARS)


def normalize_line(value: str) -> str:
    text = strip_watermark(value)
    text = normalize_space(text)
    text = LEADING_NOISE.sub("", text)
    text = POS_MARKER_NEEDS_SPACE.sub(" ", text)
    text = POS_MARKER_FOLLOWED_BY_TEXT.sub(r"\1 ", text)
    return normalize_space(text)


def normalize_meaning(value: str) -> str:
    text = normalize_space(value)
    text = POS_MARKER_NEEDS_SPACE.sub(" ", text)
    text = POS_MARKER_FOLLOWED_BY_TEXT.sub(r"\1 ", text)
    return normalize_space(text)


def extract_rows(page: pdfplumber.page.Page, bounds: tuple[float, float, float, float]) -> list[tuple[float, str]]:
    words = page.crop(bounds).extract_words(use_text_flow=False, keep_blank_chars=False)
    rows: dict[float, list[dict[str, float | str]]] = {}
    for word in words:
        top = round(word["top"] / 2) * 2
        rows.setdefault(top, []).append(word)

    lines: list[tuple[float, str]] = []
    for top in sorted(rows):
        items = sorted(rows[top], key=lambda item: item["x0"])
        line = normalize_line(" ".join(str(item["text"]) for item in items))
        if not line or len(line) <= 1:
            continue
        lines.append((top, line))
    return lines


def split_entry(line: str) -> tuple[str, str] | None:
    marker = POS_MARKER_RE.search(line)
    if not marker:
        return None
    term = normalize_space(line[: marker.start()])
    meaning = normalize_meaning(line[marker.start() :])
    term = LEADING_NOISE.sub("", term)
    if not term or not meaning:
        return None
    term = re.sub(r"[^A-Za-z' -]", "", term).strip()
    if not term or not TERM_LINE.search(term):
        return None
    if len(term) <= 1:
        return None
    if term.lower() in {"n", "a", "ad", "vt", "vi", "v"}:
        return None
    return term, meaning


def extract_entries(pdf_path: Path) -> list[list[str]]:
    raw_entries: list[tuple[int, int, str, str]] = []
    with pdfplumber.open(pdf_path) as pdf:
        for page_index, page in enumerate(pdf.pages, 1):
            columns = [
                (0, (50, 60, 270, page.height - 40)),
                (1, (285, 60, 520, page.height - 40))
            ]
            for column_index, bounds in columns:
                rows = extract_rows(page, bounds)
                row_index = 0
                while row_index < len(rows):
                    top, line = rows[row_index]
                    if not line or len(line) <= 1:
                        row_index += 1
                        continue

                    entry = split_entry(line)
                    if entry:
                        term, meaning = entry
                        raw_entries.append((page_index, column_index, term, meaning))
                        row_index += 1
                        continue

                    if MEANING_ONLY_LINE.match(line) and row_index + 1 < len(rows):
                        next_top, next_line = rows[row_index + 1]
                        if next_top - top <= 6 and TERM_ONLY_LINE.fullmatch(next_line):
                            raw_entries.append((page_index, column_index, next_line.strip(), normalize_meaning(line)))
                            row_index += 2
                            continue

                    if TERM_ONLY_LINE.fullmatch(line) and row_index + 1 < len(rows):
                        next_top, next_line = rows[row_index + 1]
                        if next_top - top <= 6 and MEANING_ONLY_LINE.match(next_line):
                            raw_entries.append((page_index, column_index, line.strip(), normalize_meaning(next_line)))
                            row_index += 2
                            continue

                    row_index += 1
                    continue

    rows: list[tuple[str, str]] = []
    seen_terms: set[str] = set()
    for _page_index, _column_index, term, meaning in raw_entries:
        key = term.casefold()
        if key in seen_terms:
            continue
        seen_terms.add(key)
        rows.append((term, meaning))
    return build_entries_with_examples(rows)


def write_output(entries: list[list[str]], output_path: Path) -> None:
    lines = [
        "// Generated from 大学英语六级词汇乱序版.pdf.\n",
        "window.CET6_BOOK_ENTRIES = [\n"
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
    source_pdf = Path(r"D:/VM/大学英语六级词汇乱序版.pdf")
    entries = extract_entries(source_pdf)
    output_path = workspace / "cet6-book-data.js"
    write_output(entries, output_path)
    print(f"source={source_pdf.name.encode('unicode_escape').decode('ascii')}")
    print(f"entries={len(entries)}")
    print(f"first={entries[0][0] if entries else ''}")
    print(f"last={entries[-1][0] if entries else ''}")
    print(f"output={output_path}")


if __name__ == "__main__":
    main()
