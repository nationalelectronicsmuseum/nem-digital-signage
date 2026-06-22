import "../styles/SpeechPlaybackControls.css";
import iconPlay from "/images/icon_play.svg?url";
import iconStop from "/images/icon_stop.svg?url";
import iconPause from "/images/icon_pause.svg?url";
import { useIsSpeechEnabled } from "../context/SettingsContext.jsx";
import { useSpeechSynthesis } from "./SpeechSynthesis.jsx";

function SpeechPlaybackControls({ text }) {
  const { status, toggle, stop } = useSpeechSynthesis();
  const speechEnabled = useIsSpeechEnabled();

  const playButtonLabel = {
    idle: iconPlay,
    playing: iconPause,
    paused: iconPlay,
  }[status];

  return (
    <div className="speech-playback-controls">
      <div className="speechPlayer">
        <div className={speechEnabled ? "present" : "hidden"}>
          <button onClick={() => toggle(text)} className="speech">
            <img src={playButtonLabel} className="iconImg"></img>
          </button>
          <button onClick={stop} className="speech">
            <img src={iconStop} className="iconImg"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpeechPlaybackControls;
