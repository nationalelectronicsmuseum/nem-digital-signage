import json
import re
import time
from pathlib import Path
from typing import Any, Dict, Set
from concurrent.futures import ThreadPoolExecutor, as_completed

from googletrans import Translator
from tqdm import tqdm


# -------------------------------------------------
# Configuration
# -------------------------------------------------
DATA_DIR = Path("./src/data")
EN_DIR = DATA_DIR / "en"
CACHE_FILE = Path("./translation_cache.json")

MAX_WORKERS = 2          # legacy-cgi safe
BATCH_SIZE = 20
BATCH_DELAY = 0.2        # throttling safety

FILE_EXTENSION_REGEX = re.compile(r"\.[a-zA-Z0-9]{2,5}$")


# -------------------------------------------------
# JSON helpers
# -------------------------------------------------
def load_json(path: Path) -> Dict:
    with path.open("r", encoding="utf-8") as f:
        return json.load(f)


def save_json(path: Path, data: Dict):
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)


# -------------------------------------------------
# Translation helpers
# -------------------------------------------------
def is_translatable_string(value: Any) -> bool:
    return (
        isinstance(value, str)
        and value.strip()
        and not FILE_EXTENSION_REGEX.search(value)
    )


def collect_strings(data: Any, collected: Set[str]):
    if isinstance(data, dict):
        for v in data.values():
            collect_strings(v, collected)
    elif isinstance(data, list):
        for item in data:
            collect_strings(item, collected)
    elif is_translatable_string(data):
        collected.add(data)


def translate_batch(texts: list[str], target_lang: str) -> Dict[str, str]:
    """
    Translator must be instantiated per call.
    Handles googletrans returning None or partial results.
    """
    try:
        translator = Translator()
        results = translator.translate(texts, src="en", dest=target_lang)

        if results is None:
            return {}

        if not isinstance(results, list):
            results = [results]

        translated = {}
        for src, res in zip(texts, results):
            if res and res.text:
                translated[src] = res.text

        return translated

    except Exception:
        return {}


def translate_single(text: str, target_lang: str) -> str | None:
    try:
        translator = Translator()
        result = translator.translate(text, src="en", dest=target_lang)
        return result.text if result and result.text else None
    except Exception:
        return None


def populate_cache_for_language(
    english_files: list[Path],
    target_lang: str,
    cache: Dict[str, Dict[str, str]]
):
    lang_cache = cache.setdefault(target_lang, {})
    to_translate: Set[str] = set()

    for file in english_files:
        collect_strings(load_json(file), to_translate)

    to_translate -= set(lang_cache.keys())
    if not to_translate:
        return

    batches = [
        list(to_translate)[i:i + BATCH_SIZE]
        for i in range(0, len(to_translate), BATCH_SIZE)
    ]

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        futures = {
            executor.submit(translate_batch, batch, target_lang): batch
            for batch in batches
        }

        for future in tqdm(
            as_completed(futures),
            total=len(futures),
            desc=f"Translating [{target_lang}]",
            unit="batch"
        ):
            batch = futures[future]
            result = future.result()

            if result:
                lang_cache.update(result)
            else:
                # Fallback: retry strings individually
                for text in batch:
                    translated = translate_single(text, target_lang)
                    if translated:
                        lang_cache[text] = translated

            time.sleep(BATCH_DELAY)


def translate_structure(
    data: Any,
    target_lang: str,
    cache: Dict[str, Dict[str, str]]
) -> Any:
    if isinstance(data, dict):
        return {
            k: translate_structure(v, target_lang, cache)
            for k, v in data.items()
        }

    if isinstance(data, list):
        return [
            translate_structure(item, target_lang, cache)
            for item in data
        ]

    if is_translatable_string(data):
        return cache[target_lang].get(data, data)

    return data


# -------------------------------------------------
# File discovery
# -------------------------------------------------
def get_all_english_json_files() -> list[Path]:
    return list(EN_DIR.rglob("*.json"))


# -------------------------------------------------
# Main
# -------------------------------------------------
def main():
    languages_data = load_json(DATA_DIR / "languages.json")
    language_codes = [
        lang["languageCode"]
        for lang in languages_data.get("languages", [])
        if "languageCode" in lang
    ]

    cache = load_json(CACHE_FILE) if CACHE_FILE.exists() else {}
    english_files = get_all_english_json_files()

    for lang in language_codes:
        if lang == "en":
            continue

        populate_cache_for_language(english_files, lang, cache)

        for en_file in english_files:
            relative_path = en_file.relative_to(EN_DIR)
            target_file = DATA_DIR / lang / relative_path

            translated = translate_structure(
                load_json(en_file),
                lang,
                cache
            )

            save_json(target_file, translated)

    save_json(CACHE_FILE, cache)
    print("Localization refresh complete.")


if __name__ == "__main__":
    main()
