import React, { useState } from "react";
import Menu from "../components/menu/menu.jsx";

export default function InProgress() {
  const [toggle, setToggle] = useState(false);

  const text = "Hola mundo, me llamo Maria"

  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);

  utter.lang = "es-US"
  utter.pitch = 1.1;
  utter.rate = 1.2;
  utter.volume = 1;

  const speak = () => {
    synth.speak(utter)
    console.log("I have been clicked!")
    console.log("synth", synth)
    console.log("utterance", utter)
  }

  return (
    <div>
      <div className="btnNav">
        <Menu className="whiteMenu"/>
      </div>
      <div className="border">
                <h1 className="title">National Electronics Museum</h1>
        </div>
      <div>
        <button onClick={speak} style={{border: "1px solid black", paddding: "20px", width: "100px", height: "50px"}}>CLick Test</button>
      </div>
    </div>
  );
}
