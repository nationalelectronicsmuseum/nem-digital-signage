import React, { useState, useContext } from "react";
import "../speech/speech.css";
import iconPlay from "../../assets/img/icon_play.svg"
import iconStop from "../../assets/img/icon_stop.svg"
import iconPause from "../../assets/img/icon_pause.svg"
// import "../../assets/img/icon_play.svg"
import { Context, ContextLangSpeech, ContextSpeechPlayer } from "../../assets/accessibilityContext";

function Speech({ text, audio }) {
  const [pause, setPause] = useState(false);
  const [stop, setStop] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [speechBtn, setSpeechBtn] = useState("hidden");

  const pauseIcon = <i className="fa-regular fa-circle-pause fa-4x"></i>
  const playIcon = <i className="fa-regular fa-circle-play fa-4x"></i>
  const [audioIcon, setAudioIcon] = useState(playIcon);
  const [speechText, setSpeechText] = useState("Play")

  const [lang, setLang] = useContext(Context);
  const [langSpeech, setLangSpeech] = useContext(ContextLangSpeech);
  const [speechPlayer, setspeechPlayer] = useContext(ContextSpeechPlayer);

  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);

  utter.lang = langSpeech
  utter.pitch = 1.5;
  utter.rate = 1.5;

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
      setAudioIcon(pauseIcon)
      speakStart();
      console.log("Speech starting");
      //pauses speech
    }
    if ( speechText === "Pause") {
      setSpeechText("Resume")
      speakPause();
      setAudioIcon(playIcon);
      console.log("Speech paused");
    }

      //resumes speech
    if (speechText === "Resume") {
      setSpeechText("Pause")
      speakResume();
      // setAudioIcon(pauseIcon);
      console.log("Speech resuming");
    }

    console.log(pause);
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
    setAudioIcon(playIcon)
    synth.cancel();
    console.log("Speech stopped");
  };

  utter.onerror = (event) => {
    speakStop()
    console.log(
      `An error has occurred with the speech synthesis: ${event.error}`,
    );
  };

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
