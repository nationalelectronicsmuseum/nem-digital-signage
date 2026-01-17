import { useSettings } from "../context/SettingsContext.jsx";
import { useState } from "react";
import SpeechPlaybackControls from "./SpeechPlaybackControls.jsx";
import VocabularyOverlay from "./VocabularyOverlay.jsx";
import { loadContent } from "../utils/loadContent";
import { resolvePath } from "../utils/resolvePath.js";
import "../styles/TextContent.css";

export default function TextContent({ componentObject }) {
  const { settings } = useSettings();
  const languageCode = settings.language.languageCode;
  const content = loadContent(languageCode);
  let vocabulary = resolvePath(content, "vocabulary");
  const [activeWord, setActiveWord] = useState(null);
  const aStyle = {
    fontSize: settings.fontSize.point,
    fontCode: settings.font.fontCode,
  };

  const labelFontSize = parseFloat(settings.fontSize.point) + 2 + "pt";
  const labelStyle = {
    fontSize: labelFontSize,
    fontCode: settings.font.fontCode,
  };

  const label = componentObject.label;
  const text = componentObject.text;
  const speechText = label != null ? label + " " + text : text;

  const tokens = text.split(/\b/);

  return (
    <div className="text-content">
      <span style={labelStyle} className="text-content-label">
        {label}
        <SpeechPlaybackControls text={speechText} />
      </span>
      <p style={aStyle} className="text-content-text">
        {tokens.map((token, i) => {
        const key = token.toLowerCase();

        if (vocabulary[key]) {
          return (
            <span
              key={i}
              className="vocabulary-word"
              onClick={() => setActiveWord(vocabulary[key])}
            >
              {token}
            </span>
          );
        }
        return token;
      })}

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
