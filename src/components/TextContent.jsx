import { useSettings } from "../context/SettingsContext.jsx";
import { useState } from "react";
import SpeechPlaybackControls from "./SpeechPlaybackControls.jsx";
import VocabularyOverlay from "./VocabularyOverlay.jsx";
import { useContent } from "../context/ContentProvider.jsx";
import { resolvePath } from "../utils/resolvePath.js";
import "../styles/TextContent.css";

function parseVocabularyText(text, vocabEntries, onClick) {
  const matches = [];

  vocabEntries.forEach(entry => {
    let match;
    while ((match = entry.regex.exec(text)) !== null) {
      matches.push({
        start: match.index,
        end: match.index + match[0].length,
        entry,
        text: match[0]
      });
    }
  });

  // Sort by start index, then longest first
  matches.sort((a, b) =>
    a.start === b.start ? b.end - a.end : a.start - b.start
  );

  // Remove overlaps
  const filtered = [];
  let lastEnd = -1;
  for (const m of matches) {
    if (m.start >= lastEnd) {
      filtered.push(m);
      lastEnd = m.end;
    }
  }

  // Build React output
  const result = [];
  let cursor = 0;

  filtered.forEach((m, i) => {
    if (cursor < m.start) {
      result.push(text.slice(cursor, m.start));
    }

    result.push(
      <span
        key={`vocab-${i}`}
        className="vocabulary-word"
        role="button"
        tabIndex={0}
        onClick={() => onClick(m.entry)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick(m.entry);
          }
        }}
      >
        {m.text}
      </span>
    );

    cursor = m.end;
  });

  if (cursor < text.length) {
    result.push(text.slice(cursor));
  }

  return result;
}



export default function TextContent({ componentObject }) {
  const { settings } = useSettings();
  const content = useContent();
  const vocabulary = resolvePath(content, "vocabulary");
  const [activeWord, setActiveWord] = useState(null);
  const aStyle = {
    fontSize: settings.fontSize.point,
  };

const vocabEntries = Object.entries(vocabulary)
  .map(([key, value]) => ({
    key,
    regex: new RegExp(`\\b${key.replace(/\s+/g, "\\s+")}\\b`, "gi"),
    ...value
  }))
  .sort((a, b) => b.key.length - a.key.length);


  const labelFontSize = parseFloat(settings.fontSize.point) + 2 + "pt";
  const labelStyle = {
    fontSize: labelFontSize,
  };

  const label = componentObject.label;
  const text = componentObject.text;
  const speechText = label != null ? label + " " + text : text;

  return (
    <div className="text-content">
      <span style={labelStyle} className="text-content-label">
        {label}
        <SpeechPlaybackControls text={speechText} />
      </span>
      <p style={aStyle} className="text-content-text">
      {parseVocabularyText(text, vocabEntries, setActiveWord)}

      {activeWord && (
        <VocabularyOverlay
          term={activeWord.term}
          definition={activeWord.definition}
          onClose={() => setActiveWord(null)}
        />
      )}
      </p>
    </div>
  );
}
