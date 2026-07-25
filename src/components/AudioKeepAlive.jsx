import { useEffect } from "react";

// Holds the speaker amplifier out of standby so speech synthesis isn't clipped
// at the start. A 10 Hz sine sits below the ~20 Hz hearing threshold, so it is
// inaudible, but it is still a continuous non-silent signal, which is what the
// amp's auto-standby is watching for. Values match the loop.flac asset this
// replaced: 10 Hz at 0.675 of full scale (-3.4 dBFS).
//
// This is generated rather than played from a file on purpose. A looped asset
// restarts every N seconds, and <audio loop> is not gapless — the browser fades
// the media out and back in at the loop point, and that amplitude step is a
// broadband transient, audible as a periodic tick even though the tone itself
// is not. An oscillator runs continuously for the life of the page, so there is
// no loop point to click at, and no decode or resampling either.
const KEEPALIVE_HZ = 10;
const KEEPALIVE_GAIN = 0.675;

export default function AudioKeepAlive() {
  useEffect(() => {
    const Ctor = window.AudioContext || window.webkitAudioContext;
    if (!Ctor) return undefined;

    const ctx = new Ctor();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = KEEPALIVE_HZ;
    gain.gain.value = KEEPALIVE_GAIN;

    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start();

    // Autoplay policy can leave the context suspended until the visitor first
    // touches the screen. Retry on the first interaction — the kiosk is
    // touch-only, so any tap resumes it and it then runs for the whole session.
    const resume = () => {
      if (ctx.state === "suspended") ctx.resume().catch(() => {});
    };
    resume();
    window.addEventListener("pointerdown", resume);
    document.addEventListener("visibilitychange", resume);

    return () => {
      window.removeEventListener("pointerdown", resume);
      document.removeEventListener("visibilitychange", resume);
      try {
        oscillator.stop();
      } catch {
        // already stopped
      }
      ctx.close().catch(() => {});
    };
  }, []);

  return null;
}
