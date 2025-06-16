import { useContext } from "react";
import "../speech/speech.css";
import iconPlay from "../../assets/img/icon_play.svg"
import iconStop from "../../assets/img/icon_stop.svg"
import iconPause from "../../assets/img/icon_pause.svg"
import { useSettings } from "../../components/AccessibilitySettings/AccessibilitySettings.jsx";
import { useSpeechSynthesis } from '../speech/useSpeechSynthesis';

function Speech({ text }) {
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
        <div className={settings.speechEnabled ? "present" : "hiddenPlayer"}>
          <button onClick={() => toggle(text, null)} className="speech">
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

export default Speech;
