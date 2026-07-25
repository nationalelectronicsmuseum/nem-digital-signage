import { useEffect } from "react";
import { useAudioContext } from "../context/AudioProvider.jsx";
import { useContent } from "../context/ContentProvider.jsx";
import { resolvePath } from "../utils/resolvePath.js";

import iconPlay from "/images/evoPlay.svg?url";
import iconPause from "/images/evoPause.svg?url";
import iconStop from "/images/evoStop.svg?url";

export default function SoundPlayer({ src }) {
  const { play, pause, stop, preload, currentSrc, isPlaying } =
    useAudioContext();
  const content = useContent();
  const t = (key, fallback) =>
    resolvePath(content, "common.label." + key) || fallback;
  const localPlaying = isPlaying && currentSrc === src;

  useEffect(() => {
    preload(src);
  }, [src, preload]);

  const handlePlayPause = () => {
    if (localPlaying) pause();
    else play(src);
  };

  const handleStop = () => {
    stop();
  };

  const buttonReset = {
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
  };

  return (
    <div className="audioPlayer">
      <button
        type="button"
        style={buttonReset}
        onClick={handlePlayPause}
        aria-label={
          localPlaying ? t("pauseAudio", "Pause audio") : t("playAudio", "Play audio")
        }
      >
        <img src={localPlaying ? iconPause : iconPlay} alt="" />
      </button>
      <button
        type="button"
        style={buttonReset}
        onClick={handleStop}
        aria-label={t("stopAudio", "Stop audio")}
      >
        <img src={iconStop} alt="" />
      </button>
    </div>
  );
}
