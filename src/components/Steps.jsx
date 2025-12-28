import { useSettings } from "../context/SettingsContext.jsx";
import SpeechPlaybackControls from "./SpeechPlaybackControls.jsx";
import "../styles/Steps.css";

export default function Steps({ componentObject }) {
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

  const itemList = componentObject.list;

  let index = 1;
  let speechText = componentObject.label ? componentObject.label : "";
  speechText += ". ";
  speechText += componentObject.description ? componentObject.description : "";
  speechText += ". ";
  if (componentObject.list) {
    for (const step of componentObject.list) {
      speechText += index + ". ";
      if (typeof step === "string") {
        speechText += step;
      } else {
        speechText += step.label ? step.label : "";
        speechText += ". ";
        speechText += step.text ? step.text : "";
      }
      speechText += ". ";
      index += 1;
    }
  }

  return (
    <div>
      <span style={labelStyle} className="steps-label">
        {componentObject.label}
        <SpeechPlaybackControls text={speechText} />
      </span>
      {componentObject.description && (
        <p style={aStyle} className="steps-description">
          {componentObject.description}
        </p>
      )}
      <ul>
        {itemList &&
          itemList.map((el, j) => (
            <li className="steps" key={j}>
              {el.label && (
                <span style={labelStyle} className="steps-label">
                  {j + 1 + ". " + el.label}
                </span>
              )}
              <p style={aStyle} className="steps-value">
                {(el.label ? "" : j + 1 + ". ") + el.text}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}
