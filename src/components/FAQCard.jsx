import { useState } from "react";
import { createPortal } from "react-dom";
import { useSettings } from "../context/SettingsContext.jsx";
import SpeechPlaybackControls from "./speech/SpeechPlaybackControls.jsx";
import "../styles/FAQCard.css";

const FAQOverlay = ({ onClose }) => {
  return createPortal(
    <div className="faqcard-overlay-background" onClick={onClose}>
      <div className="faqcard-overlay" onClick={(e) => e.stopPropagation()}>
        <div className="faqcard-overlay-content">
          <p>This is the overlay content.</p>
        </div>
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

  let speechText = "";
  speechText += componentObject.name ? componentObject.name : "";
  speechText += ". ";
  speechText += componentObject.description ? componentObject.description : "";
  speechText += ". ";
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button style={aStyle} className="faqcard-button" onClick={() => setOpen(true)}>
        {componentObject.name}
      </button>

      {open && <FAQOverlay onClose={() => setOpen(false)} />}
    </div>
  );
}
