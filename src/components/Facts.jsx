import { useSettings } from "../context/SettingsContext.jsx";
import SpeechPlaybackControls from "./SpeechPlaybackControls.jsx";
import "../styles/Facts.css";

export default function Facts({ componentObject }) {
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

  let speechText = "";
  for (const fact of componentObject.facts) {
    speechText += fact.label ? fact.label : "";
    speechText += ". ";
    speechText += fact.value ? fact.value : "";
    speechText += ". ";
  }

  return (
    <div>
      <span style={labelStyle} className="facts-title-label">
        {componentObject.label}
        <SpeechPlaybackControls text={speechText} />
      </span>
      <ul>
        {componentObject.facts.map((el, j) => (
          <li className="facts" key={j}>
            <span style={aStyle} className="facts-label">
              {el.label}
            </span>
            <span style={aStyle} className="facts-value">
              {el.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
