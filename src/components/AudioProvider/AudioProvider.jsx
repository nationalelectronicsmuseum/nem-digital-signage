import { createContext, useContext, useRef, useState } from "react";

const AudioContextGlobal = createContext();

export const useAudioContext = () => useContext(AudioContextGlobal);

export const AudioProvider = ({ children }) => {
  const [currentSrc, setCurrentSrc] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioCache = useRef({});

  const preload = (src) => {
    if (!audioCache.current[src]) {
      const audio = new Audio(src);
      audio.preload = "auto";
      audioCache.current[src] = audio;
    }
  };

  const play = (src) => {
    if (currentSrc && currentSrc !== src && audioCache.current[currentSrc]) {
      const prev = audioCache.current[currentSrc];
      prev.pause();
      prev.currentTime = 0;
    }

    preload(src);
    const audio = audioCache.current[src];
    if (!audio) return;

    audio.play();
    setCurrentSrc(src);
    setIsPlaying(true);

    audio.onended = () => {
      setIsPlaying(false);
    };
  };

  const pause = () => {
    if (!currentSrc) return;
    const audio = audioCache.current[currentSrc];
    audio?.pause();
    setIsPlaying(false);
  };

  const stop = () => {
    if (!currentSrc) return;
    const audio = audioCache.current[currentSrc];
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <AudioContextGlobal.Provider
      value={{
        play,
        pause,
        stop,
        preload,
        currentSrc,
        isPlaying,
      }}
    >
      {children}
    </AudioContextGlobal.Provider>
  );
};
