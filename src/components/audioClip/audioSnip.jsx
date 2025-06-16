import audioSnippet from "../../assets/img/audioSnip.svg"
import { useSpeechSynthesis } from '../speech/useSpeechSynthesis.jsx';

export default function audioSnip({text}) {
  
    const { voices, speechStatus, toggle, stop: stopSpeech } = useSpeechSynthesis();

    const speakStart = () => {
        stopSpeech();
        toggle(text);
    };

  return (
    <div>
      <button className="audioSnip" onClick={speakStart} >
          <img src={audioSnippet}></img>
      </button>
    </div>
  )
}
