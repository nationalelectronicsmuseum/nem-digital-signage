import React, { useContext } from 'react'
import audioSnippet from "../../assets/img/audioSnip.svg"
import { ContextLangSpeech } from "../../assets/accessibilityContext";

export default function audioSnip({text}) {
  
    const [langSpeech, setLangSpeech] = useContext(ContextLangSpeech);

    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
  
    
    utter.lang = langSpeech
    utter.pitch = 1.1;
    utter.rate = 1.5;

    const speakStart = () => {
        synth.cancel();
        synth.speak(utter);
        console.log("uttered")
    };

  return (
    <div>
      <button className="audioSnip" onClick={speakStart} >
          <img src={audioSnippet}></img>
      </button>
    </div>
  )
}
