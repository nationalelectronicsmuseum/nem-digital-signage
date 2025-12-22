import { loadContent } from "../utils/loadContent";
import { useSettings } from "../context/SettingsContext.jsx";
import { resolvePath } from "../utils/resolvePath.js";
import "../styles/SlideContent.css";
import Facts from "./Facts.jsx";
import Steps from "./Steps.jsx";
import TextContent from "./TextContent.jsx";
import FAQCardList from "./FAQCardList.jsx";

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
      {data.map((itemPath, i) => {
        let contentItem = resolvePath(content, itemPath);
        if (!contentItem) {
          console.log(
            "Content item of path " + itemPath + " unresolved. Skipping..."
          );
          return;
        }
        const fieldName = getFieldName(itemPath);

        if (Array.isArray(contentItem)) {
          if (fieldName === "facts") {
            return <Facts componentObject={contentItem} key={i} />;
          } else if (fieldName === "faq") {
            return <FAQCardList componentObject={contentItem} key={i} />;
          }
        }

        const label = getLabel(fieldName, content.common.label);
        if (typeof contentItem === "string") {
          contentItem = { text: contentItem, label: label };
        } else if (!("label" in contentItem)) {
          contentItem.label = label;
        }

        if (fieldName === "steps") {
          return <Steps componentObject={contentItem} key={i} />;
        }

        return <TextContent key={i} componentObject={contentItem} />;
      })}
    </div>
  );
}
