import React from 'react'
import audioSnippet from "../../assets/img/audioSnip.svg"

export default function audioSnip({text}) {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
  
    utter.pitch = 1.1;
    utter.rate = 1.3;

    const speakStart = () => {
        synth.cancel();
        synth.speak(utter);
        console.log("uttered")
    };

  return (
    <div className="audioSnipBox">
    
      <button className="audioSnip" onClick={speakStart} >
          <img src={audioSnippet}></img>
      </button>
        <h5>{text}</h5>
    </div>
  )
}
