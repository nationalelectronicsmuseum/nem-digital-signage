import { Link } from "react-router-dom";
import homeAudio from "../assets/img/audiotrans1.jpg"
import homeRecord from "../assets/img/AudioHome.jfif"
import homeEwaves from "../assets/img/ewaves1.webp"
import Accessibility from "../components/accessibility/accessibility.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { AUDIO_TRANSLATOR, ELECTROMAGNETIC_RADIO_WAVES, EVOLUTION_OF_RECORDED_SOUND } from "../assets/ArtifactTags.js";

export default function Station3() {
    const audioTranslator = getLocalizedArtifact(AUDIO_TRANSLATOR);
    const electromagneticRadioWaves = getLocalizedArtifact(ELECTROMAGNETIC_RADIO_WAVES);
    const evolutionOfRecordedSound = getLocalizedArtifact(EVOLUTION_OF_RECORDED_SOUND);
  return (
    <div>
      <div className="accs">
        <Accessibility />
      </div>

      <div className="border">
        <h1 className="title">National Electronics Museum</h1>
      </div>

      <div className="homeLink">
        <Link to="/station3audio" relative="path" className="linkPage">
          <img src={homeAudio} className="homeImg"></img>
          <h2 className="stationPages">{audioTranslator.stationTitle}</h2>
        </Link>
        <Link to="/station3-visible-electromagnetic-waves" className="linkPage" relative="path">
          <img src={homeEwaves} className="homeImg"></img>
          <h2 className="stationPages">{electromagneticRadioWaves.stationTitle}</h2>
        </Link>
        <Link to="/evolution-recorded-sound" className="linkPage" relative="path">
          <img src={homeRecord} className="homeImg"></img>
          <h2 className="stationPages">{evolutionOfRecordedSound.stationTitle}</h2>
        </Link>
      </div>

    </div>
  )
}
