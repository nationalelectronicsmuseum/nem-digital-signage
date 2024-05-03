import React from "react";
import "../speech/speech.css"

function Speech({ text }) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);

  const speakStart = () => {
    synth.speak(utter);
  };

  const speakPause = () => {
    synth.pause();
    console.log("utter", utter);
  };

  const speakResume = () => {
    synth.resume();
  };

  return (
    <div>
      <button onClick={speakStart} className="speech">
        <i className="fa-solid fa-volume-high"></i>
      </button>
      <button onClick={speakPause} className="speech">
        <i className="fa-regular fa-circle-pause"></i>
      </button>
      <button onClick={speakResume} className="speech">
        <i className="fa-regular fa-circle-play"></i>
      </button>
    </div>
  );
}

export default Speech;
