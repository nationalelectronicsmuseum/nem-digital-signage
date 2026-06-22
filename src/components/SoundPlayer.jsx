import { useEffect } from "react";
import { useAudioContext } from "../context/AudioProvider.jsx";

import iconPlay from "/images/evoPlay.svg?url";
import iconPause from "/images/evoPause.svg?url";
import iconStop from "/images/evoStop.svg?url";

export default function SoundPlayer({ src }) {
  const { play, pause, stop, preload, currentSrc, isPlaying } =
    useAudioContext();
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

  return (
    <div className="audioPlayer">
      <img
        src={localPlaying ? iconPause : iconPlay}
        onClick={handlePlayPause}
      />
      <img src={iconStop} onClick={handleStop} />
    </div>
  );
}
