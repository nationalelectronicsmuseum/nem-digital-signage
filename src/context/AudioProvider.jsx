import { createContext, useContext, useRef, useState } from "react";

const AudioContextGlobal = createContext();

export const useAudioContext = () => useContext(AudioContextGlobal);

export const AudioProvider = ({ children }) => {
  const [currentSrc, setCurrentSrc] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // A Map keeps insertion order so we can evict the least-recently-added
  // element once the cache is full. On a kiosk running for days this stops
  // decoded <audio> elements from accumulating without bound.
  const audioCache = useRef(new Map());
  const MAX_CACHE = 12;

  const evictIfNeeded = (keepSrc) => {
    const cache = audioCache.current;
    while (cache.size > MAX_CACHE) {
      const oldest = cache.keys().next().value;
      if (oldest === keepSrc || oldest === currentSrc) break;
      const audio = cache.get(oldest);
      audio?.pause();
      if (audio) audio.src = "";
      cache.delete(oldest);
    }
  };

  const preload = (src) => {
    if (!audioCache.current.has(src)) {
      const audio = new Audio(src);
      audio.preload = "auto";
      audioCache.current.set(src, audio);
      evictIfNeeded(src);
    }
  };

  const play = (src) => {
    if (currentSrc && currentSrc !== src && audioCache.current.has(currentSrc)) {
      const prev = audioCache.current.get(currentSrc);
      prev.pause();
      prev.currentTime = 0;
    }

    preload(src);
    const audio = audioCache.current.get(src);
    if (!audio) return;

    audio.onended = () => {
      setIsPlaying(false);
    };

    setCurrentSrc(src);
    setIsPlaying(true);

    // play() rejects under autoplay policy or when interrupted by a pause();
    // swallow it and keep UI state consistent rather than leaking an
    // unhandled promise rejection.
    const started = audio.play();
    if (started && typeof started.catch === "function") {
      started.catch(() => setIsPlaying(false));
    }
  };

  const pause = () => {
    if (!currentSrc) return;
    const audio = audioCache.current.get(currentSrc);
    audio?.pause();
    setIsPlaying(false);
  };

  const stop = () => {
    if (!currentSrc) return;
    const audio = audioCache.current.get(currentSrc);
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
