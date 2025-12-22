import { useSettings } from "../context/SettingsContext.jsx";
import SpeechPlaybackControls from "./speech/SpeechPlaybackControls.jsx";
import "../styles/FAQCardList.css";
import FAQCard from "./FAQCard.jsx";

export default function FAQCardList({ componentObject }) {
  const { settings } = useSettings();
  const aStyle = {
    fontSize: settings.fontSize.point,
    fontCode: settings.font.fontCode,
  };

  let speechText = "";
  for (const fact of componentObject) {
    speechText += fact.label ? fact.label : "";
    speechText += ". ";
    speechText += fact.value ? fact.value : "";
    speechText += ". ";
  }

  return (
    <div>
      <span className="facts-title-label">
        <SpeechPlaybackControls text={speechText} />
      </span>
        {componentObject.map((el, j) => (
          <FAQCard componentObject={el} key={j} />
        ))}
    </div>
  );
}
