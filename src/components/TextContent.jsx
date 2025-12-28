import { useSettings } from "../context/SettingsContext.jsx";
import SpeechPlaybackControls from "./SpeechPlaybackControls.jsx";
import "../styles/TextContent.css";

export default function TextContent({ componentObject }) {
  const { settings } = useSettings();
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

  return (
    <div className="text-content">
      <span style={labelStyle} className="text-content-label">
        {label}
        <SpeechPlaybackControls text={speechText} />
      </span>
      <p style={aStyle} className="text-content-text">
        {text}
      </p>
    </div>
  );
}
