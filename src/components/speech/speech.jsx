import React, { useState } from "react";
import "../speech/speech.css";
import { icon } from "@fortawesome/fontawesome-svg-core";

function Speech({ text, title }) {
  const [pause, setPause] = useState(false);
  const [stop, setStop] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [speechBtn, setSpeechBtn] = useState("hidden");

  const pauseIcon = "fa-regular fa-circle-pause fa-4x";
  const playIcon = "fa-regular fa-circle-play fa-4x";
  const [audioIcon, setAudioIcon] = useState(playIcon);

  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);

  utter.pitch = 1;
  utter.rate = 1.2;

  const callback = () => {
    if (!toggle) {
      setSpeechBtn("present");
      setToggle(true);
    } else {
      setSpeechBtn("hidden");
      setToggle(false);
    }
  };

  const speakControl = () => {
    //Starts speech
    if (pause == false && stop == true) {
      setStop(false);
      speakStart();
      // setAudioIcon(pauseIcon);
      console.log("Speech starting");

      //pauses speech
    } else if (pause == false && stop == false) {
      setPause(true);
      speakPause();
      // setAudioIcon(playIcon);
      console.log("Speech paused");

      //resumes speech
    } else if (pause == true) {
      setPause(false);
      speakResume();
      // setAudioIcon(pauseIcon);
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
      setPause(true)
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
          {/* <button onClick={speakControl} className="speech">
            {pause == false && stop == true ? (
              <i className={playIcon}></i>
            ) : pause == false && stop == false ? (
              <i className={pauseIcon}></i>
            ) : pause == true ? (
              <i className={pauseIcon}></i>
            ) : (<i className={pauseIcon}></i>)}
          </button> */}

          <button onClick={speakStart} className="speech">
            <i className={playIcon}></i>
          </button>

          <button onClick={speakPause} className="speech">
            <i className={pauseIcon}></i>
          </button>

          <button onClick={speakStop} className="speech">
            <i className="fa-regular fa-circle-stop fa-4x"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Speech;
