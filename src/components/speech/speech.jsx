import React, { useState } from "react";
import "../speech/speech.css";
import { icon } from "@fortawesome/fontawesome-svg-core";

function Speech({ text, title }) {
  const [pause, setPause] = useState(false);
  const [stop, setStop] = useState(true);
  const [toggle, setToggle] = useState(false)
  const [speechBtn, setSpeechBtn] = useState("hidden")

  const pauseIcon = "fa-regular fa-circle-pause";
  const playIcon = "fa-regular fa-circle-play";
  const [audioIcon, setAudioIcon] = useState(playIcon);

  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);

  utter.pitch = 1;
  utter.rate = 1.2;

  const callback = () => {
    if (!toggle) {
      setSpeechBtn("present")
      setToggle(true)
    } else {
      setSpeechBtn("hidden")
      setToggle(false)
    }
  }



  const speakControl = () => {
    //Starts speech
    if (pause == false && stop == true) {
      setStop(false);
      speakStart();
      console.log("Speech starting");

      //pauses speech
    } else if (pause == false && stop == false) {
      setPause(true);
      speakPause();
      console.log("Speech paused");

      //resumes speech
    } else if (pause == true) {
      setPause(false);
      speakResume();
      setAudioIcon(playIcon);
      console.log("Speech resuming");
    }

    console.log(pause);
  };

  const speakStart = () => {
    synth.cancel();
    synth.speak(utter);
  };

  const speakPause = () => {
    if (pause == false) {
      synth.pause();
    } else {
      speakResume();
      setPause(false);
    }
  };

  const speakResume = () => {
    synth.resume();
  };

  const speakStop = () => {
    setStop(true);
    setPause(false);
    synth.cancel();
    console.log("Speech stopped");
  };




  return (
    <div>
      <div className="speechPlayer">

        <div className="speechToggle">
          <i className="fa-solid fa-font"></i>
          <label>
            <input type="checkbox" onClick={callback} />
            <span />
          </label>
          <i className="fa-solid fa-volume-high"></i>
        </div>
        <div className={speechBtn}>
          <button onClick={speakControl} className="speech">
            <i className={audioIcon} data-fa-transform="grow-20"></i>
          </button>

          <button onClick={speakStop} className="speech">
            <i
              className="fa-regular fa-circle-stop"
              data-fa-transform="grow-20"
            ></i>
          </button>
        </div>

      </div>
    </div>
  );
}

export default Speech;
