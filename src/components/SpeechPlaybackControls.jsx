import "../styles/SpeechPlaybackControls.css";
import iconPlay from "/images/icon_play.svg?url";
import iconStop from "/images/icon_stop.svg?url";
import iconPause from "/images/icon_pause.svg?url";
import { useIsSpeechEnabled } from "../context/SettingsContext.jsx";
import { useSpeech } from "../context/SpeechProvider.jsx";
import { useContent } from "../context/ContentProvider.jsx";
import { resolvePath } from "../utils/resolvePath.js";

function SpeechPlaybackControls({ text }) {
  const { status, activeText, toggle, stop } = useSpeech();
  const speechEnabled = useIsSpeechEnabled();
  const content = useContent();
  const t = (key, fallback) =>
    resolvePath(content, "common.label." + key) || fallback;

  // Only the control whose text is currently being spoken shows the pause icon.
  const isPlayingThis = activeText === text && status === "playing";
  const playButtonLabel = isPlayingThis ? iconPause : iconPlay;

  return (
    <div className="speech-playback-controls">
      <div className="speechPlayer">
        <div className={speechEnabled ? "present" : "hidden"}>
          <button
            onClick={() => toggle(text)}
            className="speech"
            aria-label={t("playPauseSpeech", "Play or pause speech")}
          >
            <img src={playButtonLabel} className="iconImg" alt="" />
          </button>
          <button
            onClick={stop}
            className="speech"
            aria-label={t("stopSpeech", "Stop speech")}
          >
            <img src={iconStop} className="iconImg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpeechPlaybackControls;
