import "../styles/SpeechPlaybackControls.css";
import iconPlay from "/images/icon_play.svg?url";
import iconStop from "/images/icon_stop.svg?url";
import iconPause from "/images/icon_pause.svg?url";
import { useSettings, isSpeechEnabled } from "../context/SettingsContext.jsx";
import { useSpeechSynthesis } from "./SpeechSynthesis.jsx";

function SpeechPlaybackControls({ text }) {
  const { settings, setSettings } = useSettings();
  const { voices, status, toggle, stop } = useSpeechSynthesis();

  const playButtonLabel = {
    idle: iconPlay,
    playing: iconPause,
    paused: iconPlay,
  }[status];

  return (
    <div>
      <div className="speechPlayer">
        <div className={isSpeechEnabled() ? "present" : "hidden"}>
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
