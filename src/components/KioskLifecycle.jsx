import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSettings } from "../context/SettingsContext.jsx";
import { useSpeech } from "../context/SpeechProvider.jsx";
import { useAudioContext } from "../context/AudioProvider.jsx";

const IDLE_RESET_MILLIS = 10 * 60 * 1000;
const VERSION_POLL_MILLIS = 5 * 60 * 1000;
const VERSION_URL = "/version.json";

// Unattended-kiosk housekeeping. Renders nothing.
//
// Idle reset: after 10 minutes without a touch, restore the kiosk for the
// next visitor — stop speech and audio, reset accessibility settings, and
// return to the landing page of the station this kiosk is parked on (not the
// global index, so each kiosk stays assigned to its station).
//
// Deploy refresh: version.json is emitted at build time (see vite.config.js).
// Poll it and reload at the next idle tick when a new deploy is detected, so
// kiosks pick up updates without anyone power-cycling them. In dev there is
// no version.json and polling silently does nothing.
export default function KioskLifecycle() {
  const { resetSettings } = useSettings();
  const speech = useSpeech();
  const audio = useAudioContext();
  const navigate = useNavigate();
  const location = useLocation();

  // Latest values for the timer callback without re-arming it every render.
  const stateRef = useRef(null);
  useEffect(() => {
    stateRef.current = {
      speech,
      audio,
      resetSettings,
      navigate,
      pathname: location.pathname,
    };
  });
  const updatePendingRef = useRef(false);

  useEffect(() => {
    let timer;

    const onIdle = () => {
      if (updatePendingRef.current) {
        window.location.reload();
        return;
      }
      const { speech, audio, resetSettings, navigate, pathname } =
        stateRef.current;
      speech.stop();
      audio.stop();
      resetSettings();
      const stationRoot = "/" + (pathname.split("/")[1] ?? "");
      if (pathname !== stationRoot) navigate(stationRoot);
      // Keep ticking while unattended so a deploy that lands after the first
      // idle reset still gets applied.
      resetTimer();
    };

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(onIdle, IDLE_RESET_MILLIS);
    };

    const events = ["pointerdown", "touchstart", "keydown"];
    events.forEach((e) =>
      window.addEventListener(e, resetTimer, { passive: true })
    );
    resetTimer();

    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, resetTimer));
    };
  }, []);

  useEffect(() => {
    let baseline = null;
    let stopped = false;

    const check = async () => {
      try {
        const res = await fetch(VERSION_URL, { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        if (stopped || data?.version === undefined) return;
        if (baseline === null) {
          baseline = data.version;
        } else if (data.version !== baseline) {
          updatePendingRef.current = true;
        }
      } catch {
        // No version.json (dev server) or a network blip — try again later.
      }
    };

    check();
    const interval = setInterval(check, VERSION_POLL_MILLIS);
    return () => {
      stopped = true;
      clearInterval(interval);
    };
  }, []);

  return null;
}
