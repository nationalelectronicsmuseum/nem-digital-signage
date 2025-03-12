import React, { useState } from "react";
import Menu from "../components/menu/menu.jsx";

export default function InProgress() {
  const [toggle, setToggle] = useState(false);

  const textES = "Hola mundo, me llamo Maria"
  const textFR = "Bonjour le monde, je m'appelle Maria"
  const textDE = "Hallo Welt, ich bin Maria"


  const voiceBox = []

  const synth = window.speechSynthesis;
  const obtainVoice = () => { 
    synth.getVoices().map(x => {
      if(x.lang === "es-US" | x.lang === "es-US" || x.lang === "de-DE" || x.lang === "fr-FR"){
        voiceBox.push(x)
      }
  })}

  obtainVoice()
  
  const utterFrench = new SpeechSynthesisUtterance(textFR);
  const utterGerman = new SpeechSynthesisUtterance(textDE);
  const utterSpanish = new SpeechSynthesisUtterance(textES);

  console.log("obtaining voice", obtainVoice)
  console.log("voice box", voiceBox)

  utterSpanish.voice = voiceBox[1] 
  utterGerman.voice = voiceBox[0]
  utterFrench.voice = voiceBox[2]

  // utterSpanish.lang = "es-US"
  // utterGerman.lang = "de-DE"
  // utterFrench.lang = "fr-FR"

  const speakFrench = () => {
    synth.speak(utterFrench)
    console.log("I have been clicked! Speaking French!")
    console.log("synth", synth)
    console.log("utterance", utterFrench)
  }
  const speakGerman = () => {
    synth.speak(utterGerman)
    console.log("I have been clicked! Speaking German!")
    console.log("synth", synth)
    console.log("utterance", utterGerman)
  }
  const speakSpanish = () => {
    synth.speak(utterSpanish)
    console.log("I have been clicked! Speaking Spanish!")
    console.log("synth", synth)
    console.log("utterance", utterSpanish)
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
        <button onClick={speakSpanish} style={{border: "1px solid black", paddding: "20px", width: "100px", height: "50px"}}>CLick Spanish</button>
        <button onClick={speakGerman} style={{border: "1px solid black", paddding: "20px", width: "100px", height: "50px"}}>CLick German</button>
        <button onClick={speakFrench} style={{border: "1px solid black", paddding: "20px", width: "100px", height: "50px"}}>CLick French</button>
      </div>
    </div>
  );
}
