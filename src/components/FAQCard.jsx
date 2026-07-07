import { useState } from "react";
import { createPortal } from "react-dom";
import { useSettings } from "../context/SettingsContext.jsx";
import SpeechPlaybackControls from "./SpeechPlaybackControls.jsx";
import useModalBehavior from "../hooks/useModalBehavior.js";
import "../styles/FAQCard.css";

const FAQOverlay = ({ onClose, componentObject }) => {
  const { settings } = useSettings();
  const dialogRef = useModalBehavior(onClose);
  const aStyle = {
    fontSize: settings.fontSize.point,
  };
  return createPortal(
    <div
      className="faqcard-overlay-background"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        className="faqcard-overlay-close"
        onClick={onClose}
        aria-label="Close"
      ></button>
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="faqcard-overlay"
        role="dialog"
        aria-modal="true"
        aria-label={componentObject.name}
      >
        {componentObject && (
          <div className="faqcard-overlay-content">
            <div className="faqcard-overlay-content-left">
              {componentObject.description && (
                <div>
                  <SpeechPlaybackControls
                    text={componentObject.description}
                  />
                  <p className="faqcard-overlay-content-text" style={aStyle}>
                    {componentObject.description}
                  </p>
                </div>
              )}
              {componentObject.imageCaption && (
                <div>
                  <SpeechPlaybackControls
                    text={componentObject.imageCaption}
                  />
                  <p className="faqcard-overlay-content-caption" style={aStyle}>
                    {componentObject.imageCaption}
                  </p>
                </div>
              )}
            </div>
            <div className="faqcard-overlay-content-right">
              {componentObject.image && (
                <img
                  className="faqcard-overlay-content-image"
                  src={"/images/" + componentObject.image}
                  alt={componentObject.imageCaption || ""}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default function FAQCard({ componentObject }) {
  const { settings } = useSettings();
  // Scale relative to the visitor's text-size setting so "Large" stays large
  // here too (a fixed subtraction shrank small sizes disproportionately).
  const nameFontSize = parseFloat(settings.fontSize.point) * 0.7 + "pt";
  const aStyle = {
    fontSize: nameFontSize,
  };

  let speechText = componentObject.name ? componentObject.name : "";
  const [open, setOpen] = useState(false);

  return (
    <div>
      <SpeechPlaybackControls text={speechText} />
      <button
        style={aStyle}
        className="faqcard-button"
        onClick={() => setOpen(true)}
      >
        {componentObject.name}
      </button>

      {open && (
        <FAQOverlay
          componentObject={componentObject}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
