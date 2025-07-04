import { useState, useContext } from "react";
import "../speech/speech.css";
import iconPlay from "../../assets/img/icon_play.svg"
import iconStop from "../../assets/img/icon_stop.svg"
import { ContextLangSpeech, ContextSpeechPlayer } from "../../assets/accessibilityContext";

function textToSpeech({ text, audio }) {
  const [pause, setPause] = useState(false);
  const [stop, setStop] = useState(true);
  const [speechText, setSpeechText] = useState("Play")

  const [langSpeech, setLangSpeech] = useContext(ContextLangSpeech);
  const [speechPlayer, setspeechPlayer] = useContext(ContextSpeechPlayer);

  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);

  utter.lang = langSpeech
  utter.pitch = 1.1;
  utter.rate = 1.5;
  utter.volume = 1;
  
  const speakStart = () => {
    synth.cancel();
    synth.speak(utter);
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
  };

  return (
    <div>
      <div className="speechPlayer">

        <div className={speechPlayer}>

          <button onClick={speakStart} className="speech">
            <img src={iconPlay}></img>
          </button>
          
          <button onClick={speakStop} className="speech">
            <img src={iconStop} className="iconImg"></img>
          </button>

        </div>
      </div>
    </div>
  );
}

export default textToSpeech;
