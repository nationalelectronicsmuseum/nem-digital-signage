import { useEffect, useRef, useState } from 'react';

export function useSpeechSynthesis() {
  const [voices, setVoices] = useState([]);
  const [status, setStatus] = useState('idle');
  const utteranceRef = useRef(null);

  useEffect(() => {
    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      setVoices(allVoices);
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, []);

  const speak = (text, voice = null) => {
    stop(); // always clear previous
    const utterance = new SpeechSynthesisUtterance(text);
    if (voice) utterance.voice = voice;

    utterance.onstart = () => setStatus('playing');
    utterance.onend = () => setStatus('idle');
    utterance.onerror = () => setStatus('idle');

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const toggle = (text, voice = null) => {
    if (status === 'idle') {
      speak(text, voice);
    } else if (status === 'playing') {
      window.speechSynthesis.pause();
      setStatus('paused');
    } else if (status === 'paused') {
      window.speechSynthesis.resume();
      setStatus('playing');
    }
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setStatus('idle');
  };

  return {
    voices,
    status,
    toggle,
    stop,
  };
}
