import { useState } from "react";
import { createPortal } from "react-dom";
import { useSettings } from "../context/SettingsContext.jsx";
import SpeechPlaybackControls from "./SpeechPlaybackControls.jsx";
import "../styles/FAQCard.css";

const FAQOverlay = ({ onClose, componentObject }) => {
  const { settings } = useSettings();
  const aStyle = {
    fontSize: settings.fontSize.point,
    fontCode: settings.font.fontCode,
  };
  return createPortal(
    <div className="faqcard-overlay-background" onClick={onClose}>
      <div className="faqcard-overlay" onClick={(e) => e.stopPropagation()}>
        {componentObject && (
          <div className="faqcard-overlay-content">
            <div className="faqcard-overlay-content-left">
              {componentObject.description && (
                <div>
                  <SpeechPlaybackControls
                    speechText={componentObject.description}
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
  const nameFontSize = parseFloat(settings.fontSize.point) - 11 + "pt";
  const aStyle = {
    fontSize: nameFontSize,
    fontCode: settings.font.fontCode,
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
