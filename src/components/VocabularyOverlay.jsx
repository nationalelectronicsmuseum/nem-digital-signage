import { createPortal } from "react-dom";
import { useSettings } from "../context/SettingsContext.jsx";
import SpeechPlaybackControls from "./SpeechPlaybackControls.jsx";
import useModalBehavior from "../hooks/useModalBehavior.js";
import "../styles/VocabularyOverlay.css";

export default function VocabularyOverlay({ term, definition, onClose }) {
  const { settings } = useSettings();
  const dialogRef = useModalBehavior(onClose);
  const aStyle = {
    fontSize: settings.fontSize.point,
  };

  const labelFontSize = parseFloat(settings.fontSize.point) + 8 + "pt";
  const labelStyle = {
    fontSize: labelFontSize,
    fontWeight: 700
  };

  const speechText = term != null ? term + ". " + definition : definition;
  return createPortal(
    <div
      className="vocabulary-overlay-background"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        className="vocabulary-overlay-close"
        onClick={onClose}
        aria-label="Close definition"
      ></button>
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="vocabulary-overlay"
        role="dialog"
        aria-modal="true"
        aria-label={term}
      >
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
