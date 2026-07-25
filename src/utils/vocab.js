// Vocabulary keys come from curator-edited JSON, so they may contain regex
// metacharacters (e.g. "C++", "n-type [x]"). Escaping them before building a
// pattern keeps one bad key from throwing SyntaxError and blanking a slide.
export function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Builds the highlight matcher for a vocabulary term. \b is an ASCII-only word
// boundary, so it never matches CJK keys (zh/ja); apply a boundary only on a
// side that actually ends in a word character.
export function buildVocabRegex(key) {
  const pattern = escapeRegExp(key).replace(/\s+/g, "\\s+");
  const left = /\w/.test(key[0]) ? "\\b" : "";
  const right = /\w/.test(key[key.length - 1]) ? "\\b" : "";
  return new RegExp(`${left}${pattern}${right}`, "gi");
}
