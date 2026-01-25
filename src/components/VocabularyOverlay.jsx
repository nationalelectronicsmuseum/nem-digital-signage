import { createPortal } from "react-dom";
import { useSettings } from "../context/SettingsContext.jsx";
import SpeechPlaybackControls from "./SpeechPlaybackControls.jsx";
import "../styles/VocabularyOverlay.css";

export default function VocabularyOverlay({ term, definition, onClose }) {
  const { settings } = useSettings();
  const aStyle = {
    fontSize: settings.fontSize.point,
    fontCode: settings.font.fontCode,
  };

  const labelFontSize = parseFloat(settings.fontSize.point) + 8 + "pt";
  const labelStyle = {
    fontSize: labelFontSize,
    fontCode: settings.font.fontCode,
    fontWeight: 700
  };

  const speechText = term != null ? term + ". " + definition : definition;
  return createPortal(
    <div className="vocabulary-overlay-background" onClick={onClose}>
      <div className="vocabulary-overlay" onClick={(e) => e.stopPropagation()}>
        <span style={labelStyle} className="vocabulary-label">
          {term}
          <SpeechPlaybackControls text={speechText} />
        </span>
        <p style={aStyle} className="vocabulary-text">
          {definition}
        </p>
      </div>
    </div>,
    document.getElementById("modal-vocabulary-root"),
  );
}
