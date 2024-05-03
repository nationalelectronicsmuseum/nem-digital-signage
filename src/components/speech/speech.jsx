import React from "react";

function Speech({ text }) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);

  const speakStart = () => {
    synth.speak(utterance);
      
  };

  const speakPause = (event) => {
    event.onpause(utterance)
    console.log("pause");
    
  };
 
  return (
    <div>
      <button onClick={speakStart} className="speech">
        <i className="fa-solid fa-volume-high"></i>
      </button>
      <button onClick={() => speakPause(event)} className="speech">
        <i className="fa-regular fa-circle-pause"></i>
      </button>
    </div>
  );
}

export default Speech;
