import { useSettings } from "../context/SettingsContext.jsx";
import SpeechPlaybackControls from "./speech/SpeechPlaybackControls.jsx";
import SoundPlayer from "./SoundPlayer/SoundPlayer.jsx";
import "../styles/AudioCard.css";

export default function AudioCard({ componentObject }) {
  const { settings } = useSettings();
  const nameFontSize = parseFloat(settings.fontSize.point) - (settings.fontSize.name === "Small" ? 7 : 11) + "pt";
  const aFontSize = parseFloat(settings.fontSize.point) - (settings.fontSize.name === "Small" ? 11 : 15) + "pt";
  const titleStyle = {
    fontSize: nameFontSize,
    fontCode: settings.font.fontCode,
  };
  const aStyle = {
    fontSize: aFontSize,
    fontCode: settings.font.fontCode,
  };

  let speechText = componentObject.title + ". " +
  componentObject.performedByText + componentObject.performedBy + ", " + 
  componentObject.performedWhen + ". " + componentObject.recordedOn;

  return (
    <div className="audio-card">
      <div className="audio-title-and-speech">
        <h3 style={titleStyle} className="audio-card-title">{componentObject.title}</h3>
        <SpeechPlaybackControls
          className="audio-card-speech"
          text={speechText}
        />
      </div>
      <span style={aStyle} className="audio-card-content">
        <strong>
          <i>{componentObject.performedByText}</i>{" "}
          <b>{componentObject.performedBy}</b>, {componentObject.performedWhen}
        </strong>
      </span>
      <span style={aStyle} className="audio-card-content">{componentObject.recordedOn}</span>
      <SoundPlayer src={"/audio/" + componentObject.file} />
    </div>
  );
}
