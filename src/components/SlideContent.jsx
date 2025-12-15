import "../styles/Slides.css";
import { loadContent } from "../utils/loadContent";
import { useSettings } from "../context/SettingsContext.jsx";
import { resolvePath } from "../utils/resolvePath.js";
import "../styles/SlideContent.css";
import SpeechPlaybackControls from "./speech/SpeechPlaybackControls.jsx";

const getFieldName = (str) => {
  const parts = str.split(".");
  if (parts.length > 1) {
    return parts.slice(-1)[0];
  }
  return str;
};

const getLabel = (fieldName, content) => {
  return fieldName in content ? content[fieldName] : null;
};

export default function SlideContent({ data }) {
  const { settings } = useSettings();
  const languageCode = settings.language.languageCode;
  const content = loadContent(languageCode);
  const aStyle = {
    fontSize: settings.fontSize.point,
    fontCode: settings.font.fontCode,
  };

  const labelFontSize = parseFloat(settings.fontSize.point) + 2 + "pt";
  const labelStyle = {
    fontSize: labelFontSize,
    fontCode: settings.font.fontCode,
  };

  return (
    <div>
      {data.map((item, i) => {
        const v = resolvePath(content, item);
        const fn = getFieldName(item);
        const label = getLabel(fn, content.common.label);

        if (Array.isArray(v)) {
          if (fn === "facts") {
            return (
              <ul key={i}>
                {v.map((el, j) => (
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
            );
          } else if (fn === "steps") {
            return (
              <ul key={i}>
                {v.map((el, j) => (
                  <li className="steps" key={j}>
                    <span style={aStyle} className="step">{el}</span>
                  </li>
                ))}
              </ul>
            );
          } else {
            <p style={aStyle}>
              Array resolver not found for field name {fn} from {item}.
            </p>;
          }
        }

        return (
          <div key={i}>
            {label ? (
              <span style={labelStyle} className="content-label">
                {label}
                <SpeechPlaybackControls text={v} />
              </span>
            ) : (
              <SpeechPlaybackControls text={v} />
            )}
            <p style={aStyle}>{v}</p>
          </div>
        );
      })}
    </div>
  );
}
