import React, { useState, useContext } from "react";
import "../speech/speech.css";
import iconPlay from "../../assets/img/icon_play.svg"
import iconStop from "../../assets/img/icon_stop.svg"
import iconPause from "../../assets/img/icon_pause.svg"
import { Context, ContextLangSpeech, ContextSpeechPlayer } from "../../assets/accessibilityContext";

function Speech({ text, audio }) {
  const [pause, setPause] = useState(false);
  const [stop, setStop] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [speechBtn, setSpeechBtn] = useState("hidden");
  const [speechText, setSpeechText] = useState("Play")

  const [langSpeech, setLangSpeech] = useContext(ContextLangSpeech);
  const [speechPlayer, setspeechPlayer] = useContext(ContextSpeechPlayer);

  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);

  utter.lang = langSpeech
  utter.pitch = 1.1;
  utter.rate = 1.2;
  utter.volume = 1;

  utter.addEventListener("end", (event) => {
    synth.cancel()
    setSpeechText("Play")
    console.log(
      `Utterance has finished being spoken after ${event.elapsedTime} seconds.`,
    );
  })

  const speakControl = () => {

    //Starts speech
    if (speechText === "Play") {
      setSpeechText("Pause")
      speakStart();
      console.log("Speech starting");
      //pauses speech
    }
    if ( speechText === "Pause") {
      setSpeechText("Resume")
      speakPause();
      console.log("Speech paused");
    }

      //resumes speech
    if (speechText === "Resume") {
      setSpeechText("Pause")
      speakResume();
      console.log("Speech resuming");
    }
  };
  
  const speakStart = () => {
    synth.cancel();
    synth.speak(utter);
    console.log("uttered")
  };

  const speakPause = () => {
      synth.pause();
  };

  const speakResume = () => {
    synth.resume();
  };

  const speakStop = () => {
    setStop(true);
    setPause(false);
    setSpeechText("Play")
    synth.cancel();
    console.log("Speech stopped");
  };

  // utter.onerror = (event) => {
  //   speakStop()
  //   console.log(
  //     `An error has occurred with the speech synthesis of speakStop: ${event.error}`,
  //   );
  // };
  // utter.onerror = (event) => {
  //   console.log(
  //     `An error has occurred with the speech synthesis of speakStart: ${event.error}`,
  //   );
  // };

  return (
    <div>
      <div className="speechPlayer">

        <div className={speechPlayer}>

          <button onClick={speakControl} className="speech">
            <img src={ speechText == "Play" ? iconPlay : speechText == "Resume" ? iconPlay : iconPause} className="iconImg"></img>
          </button>
          
          <button onClick={speakStop} className="speech">
            <img src={iconStop} className="iconImg"></img>
          </button>

        </div>
      </div>
    </div>
  );
}

export default Speech;
