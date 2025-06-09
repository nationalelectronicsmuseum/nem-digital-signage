import re
import json
import asyncio
import os
import hashlib
from googletrans import Translator
from titlecase import titlecase

input_file = "./src/assets/database/artifact.js"
cache_file = "./translation_cache.json"

language_codes = ["es", "fr", "de"]
output_files = ["./src/assets/database/artifact-spanish.js",
                "./src/assets/database/artifact-french.js",
                "./src/assets/database/artifact-german.js"]

translator = Translator()

def is_email(s):
    return re.match(r"[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+", s)

def string_hash(s):
    return hashlib.sha256(s.encode('utf-8')).hexdigest()

def escape_quotes(s):
    return s.replace('"', '\\"')

string_literal_pattern = re.compile(r'(?<!\\)(["\'])(.*?)(?<!\\)\1')

def load_cache():
    if os.path.exists(cache_file):
        with open(cache_file, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}

def save_cache(cache):
    with open(cache_file, 'w', encoding='utf-8') as f:
        json.dump(cache, f, ensure_ascii=False, indent=2)

async def translate_file_for_language(lang_code, output_file, content, cache, string_to_hash):
    all_strings = list(string_to_hash.keys())

    to_translate = [
        s for s in all_strings
        if string_to_hash[s] not in cache or lang_code not in cache[string_to_hash[s]].get("translations", {})
    ]

    if to_translate:
        translations = await translator.translate(to_translate, dest=lang_code)
        for original, translated in zip(to_translate, translations):
            h = string_to_hash[original]
            if h not in cache:
                cache[h] = {
                    "original": original,
                    "translations": {}
                }
            cache[h]["translations"][lang_code] = translated.text
        print(f"[{lang_code}] Cached {len(to_translate)} new translations.")
    else:
        print(f"[{lang_code}] All strings already translated.")

    def replacer(match):
        quote, text = match.groups()
        after = content[match.end():match.end() + 1]
        if after == ":":
            return f"{quote}{text}{quote}"
        if is_email(text) or not text.strip():
            return f"{quote}{text}{quote}"
        h = string_to_hash[text]
        translated = cache.get(h, {}).get("translations", {}).get(lang_code, text)
        escaped = escape_quotes(translated) if quote == '"' else translated
        prefix = content[:match.start()]
        if re.search(r'title"\s*:\s*$', prefix[-30:], re.IGNORECASE):
            escaped = titlecase(escaped)
        return f"{quote}{escaped}{quote}"



    translated_content = string_literal_pattern.sub(replacer, content)

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(translated_content)
    print(f"[{lang_code}] Translation written to {output_file}")

async def main():
    if len(language_codes) != len(output_files):
        raise ValueError("Language codes and output file paths must have the same length.")

    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    matches = string_literal_pattern.findall(content)
    strings = set(s for _, s in matches if not is_email(s) and s.strip())
    string_to_hash = {s: string_hash(s) for s in strings}

    cache = load_cache()

    for lang_code, output_file in zip(language_codes, output_files):
        await translate_file_for_language(lang_code, output_file, content, cache, string_to_hash)

    save_cache(cache)

if __name__ == "__main__":
    asyncio.run(main())
