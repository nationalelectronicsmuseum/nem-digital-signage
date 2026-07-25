import { useSettings } from "../context/SettingsContext.jsx";
import SpeechPlaybackControls from "./SpeechPlaybackControls.jsx";
import "../styles/Steps.css";

export default function Steps({ componentObject }) {
  const { settings } = useSettings();
  const aStyle = {
    fontSize: settings.fontSize.point,
  };

  const labelFontSize = parseFloat(settings.fontSize.point) + 2 + "pt";
  const labelStyle = {
    fontSize: labelFontSize,
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
          itemList.map((el, j) => {
            // Steps may be plain strings or { label?, text } objects.
            const isString = typeof el === "string";
            const stepLabel = isString ? null : el.label;
            const stepText = isString ? el : el.text;
            return (
              <li className="steps" key={j}>
                {stepLabel && (
                  <span style={labelStyle} className="steps-label">
                    {j + 1 + ". " + stepLabel}
                  </span>
                )}
                <p style={aStyle} className="steps-value">
                  {(stepLabel ? "" : j + 1 + ". ") + stepText}
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
