import Menu from "../components/menu/menu.jsx";

export default function InProgress() {
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

  utterSpanish.voice = voiceBox[1] 
  utterGerman.voice = voiceBox[0]
  utterFrench.voice = voiceBox[2]

  const speakFrench = () => {
    synth.speak(utterFrench)
  }
  const speakGerman = () => {
    synth.speak(utterGerman)
  }
  const speakSpanish = () => {
    synth.speak(utterSpanish)
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
