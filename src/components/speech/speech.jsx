import React, { useState } from "react";
import "../speech/speech.css";

function Speech({ text }) {
  const [pause, setPause] = useState(false);
  const [stop, setStop] = useState(true);
  const [playColor, setPlayColor] = useState("black")

  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  utter.pitch = 1
  utter.rate = 1.8

  const speakControl = () => {
    if (pause == false && stop == true) {
      setStop(false);
      speakStart();
    } else if (pause == false) {
      setPause(true);
      speakPause();
    } else if (pause == true) {
      setPause(false);
      speakResume();
    }
  };

  const speakStart = () => {
    console.log("play");
    synth.cancel();
    synth.speak(utter);
    setPlayColor("green")
  };

  const speakPause = () => {
    console.log("pause");
    if(pause == false) {
      synth.pause();
      setPause(true)
    } else {
      speakResume()
      setPause(false)
    }
    
  };

  const speakResume = () => {
    console.log("resume");
    synth.resume();
  };

  const speakStop = () => {
    // setStop(true);
    console.log("stop");
    synth.cancel();
  };

  const color = {
    color : playColor
  }

  return (
    <div>
      <button onClick={speakStart} className="speech">
        <i style={color} className="fa-regular fa-circle-play" data-fa-transform="grow-20"></i>
      </button>
      <button onClick={speakPause} className="speech">
        <i className="fa-regular fa-circle-pause" data-fa-transform="grow-20"></i>
      </button>
      <button onClick={speakStop} className="speech">
        <i className="fa-regular fa-circle-stop" data-fa-transform="grow-20"></i>
      </button>
    </div>
  );
}

export default Speech;
