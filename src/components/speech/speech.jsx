import React, { useState } from "react";
import "../speech/speech.css";
import { icon } from "@fortawesome/fontawesome-svg-core";

function Speech({ text, title }) {
  const [pause, setPause] = useState(false);
  const [stop, setStop] = useState(true);
  const [playColor, setPlayColor] = useState("green")

  const pauseIcon = "fa-regular fa-circle-pause";
  const playIcon = "fa-regular fa-circle-play";
  const [audioIcon, setAudioIcon] = useState(playIcon);

  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);

  utter.pitch = 1;
  utter.rate = 1.2;

  const changePlay = () => {
    if(audioIcon === playIcon) {
      console.log(playIcon)
      setAudioIcon(pauseIcon)
    } else {
      console.log(pauseIcon)
      setAudioIcon(playIcon)
    }
  }

  const iconChange = () => {
    console.log(audioIcon == pauseIcon);
    // let pause = pauseIcon
    if (audioIcon !== pauseIcon) {
      setAudioIcon("fa-regular fa-circle-pause");
      console.log("icon false", audioIcon);
    } else {
      setAudioIcon("fa-regular fa-circle-play fa-5x");
      console.log("icon true", audioIcon);
    }
  };

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

  // const color = {
  //   color: playColor,
  // };

  return (
    <div>
      {/* <button onClick={speakControl} className="speech">
        <i className={audioIcon} data-fa-transform="grow-20"></i>
      </button>

      <button onClick={speakStop} className="speech">
        <i
          className="fa-regular fa-circle-stop"
          data-fa-transform="grow-20"
        ></i>
      </button> */}


      <div className="audioControl">
        <h4 className="accs">{title}</h4>
        <button onClick={speakControl} className="speech">
          <i className={playIcon} ></i>
        </button>
        <button onClick={speakStop} className="speech">
          <i
            className="fa-regular fa-circle-stop fa-5x"></i>
        </button>

        <button onClick={changePlay}> Click please</button>
      </div>
    </div>
  );
}

export default Speech;
