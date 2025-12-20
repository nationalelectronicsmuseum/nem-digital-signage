import "../styles/Slides.css";
import { loadContent } from "../utils/loadContent";
import { useSettings } from "../context/SettingsContext.jsx";
import { resolvePath } from "../utils/resolvePath.js";
import "../styles/SlideContent.css";
import SpeechPlaybackControls from "./speech/SpeechPlaybackControls.jsx";
import Facts from "./Facts.jsx";
import Steps from "./Steps.jsx";

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
            return <Facts componentObject={v} key={i} />
          } else if (fn === "steps") {
            return <Steps componentObject={v} key={i} />
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
