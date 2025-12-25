import { loadContent } from "../utils/loadContent";
import { useSettings } from "../context/SettingsContext.jsx";
import { resolvePath } from "../utils/resolvePath.js";
import "../styles/SlideContent.css";
import Facts from "./Facts.jsx";
import Steps from "./Steps.jsx";
import TextContent from "./TextContent.jsx";
import FAQCardList from "./FAQCardList.jsx";
import Video from "./Video/Video.jsx";
import SlideImage from "./slideImage/SlideImage.jsx";
import AudioCard from "./AudioCard.jsx";

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

const VIDEO_FILES = ["mp4", "webm"];
const IMAGE_FILES = ["jpg", "jpeg", "png", "svg", "gif", "webp", "jfif"];

const isVideo = (contentItem) => {
  return (
    typeof contentItem === "string" &&
    VIDEO_FILES.includes(contentItem.split(".").pop())
  );
};

const isImage = (contentItem) => {
  return (
    typeof contentItem === "string" &&
    IMAGE_FILES.includes(contentItem.split(".").pop())
  );
};

const objectImplementsAudioCard = (contentItem) => {
  return ( (typeof contentItem !== "string") &&
    "title" in contentItem &&
    "performedBy" in contentItem &&
    "performedWhen" in contentItem &&
    "recordedOn" in contentItem &&
    "file" in contentItem
  );
};

const objectImplementsSteps = (contentItem) => {
  return ( (typeof contentItem !== "string") &&
    "list" in contentItem &&
    Array.isArray(contentItem.list) &&
    "text" in contentItem.list[0]
  );
};

const objectImplementsFacts = (contentItem) => {
  return ( (typeof contentItem !== "string") &&
    "facts" in contentItem &&
    Array.isArray(contentItem.facts) &&
    "value" in contentItem.facts[0]
  );
};

export default function SlideContent({ data, className }) {
  const { settings } = useSettings();
  const languageCode = settings.language.languageCode;
  const content = loadContent(languageCode);

  return (
    <div className={className}>
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
            const newContentItem = {facts: contentItem}
            return <Facts componentObject={newContentItem} key={i} />;
          } else if (fieldName === "faq") {
            return <FAQCardList componentObject={contentItem} key={i} />;
          }
        }

        if (isVideo(contentItem)) {
          return <Video src={"/video/" + contentItem} key={i} />;
        } else if (isImage(contentItem)) {
          return (
            <SlideImage
              img={"/images/" + contentItem}
              caption={content.common.label.imageCaption}
              key={i}
            />
          );
        } else if(objectImplementsAudioCard(contentItem)) {
          contentItem.performedByText = content.common.label.performedBy;
          return <AudioCard componentObject={contentItem} key={i} />
        } else if(objectImplementsFacts(contentItem)) {
          return <Facts componentObject={contentItem} key={i} />;
        }

        const label = getLabel(fieldName, content.common.label);
        if (typeof contentItem === "string") {
          contentItem = { text: contentItem, label: label };
        } else if (!("label" in contentItem)) {
          contentItem.label = label;
        }

        if (fieldName === "steps" || objectImplementsSteps(contentItem)) {
          return <Steps componentObject={contentItem} key={i} />;
        }

        return <TextContent key={i} componentObject={contentItem} />;
      })}
    </div>
  );
}
