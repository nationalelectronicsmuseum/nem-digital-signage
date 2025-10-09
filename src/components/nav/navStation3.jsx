import { Link } from "react-router-dom";
import { getLocalizedArtifact, getLocalizedStringConstant } from "../../assets/Localization.js";
import { AUDIO_TRANSLATOR, ELECTROMAGNETIC_RADIO_WAVES, EVOLUTION_OF_RECORDED_SOUND } from "../../assets/ArtifactTags.js";

import "./nav.css";

const NavStation3 = () => {
  const home = getLocalizedStringConstant("Home");
  const audioTranslator = getLocalizedArtifact(AUDIO_TRANSLATOR);
  const electromagneticRadioWaves = getLocalizedArtifact(ELECTROMAGNETIC_RADIO_WAVES);
  const evolutionOfRecordedSound = getLocalizedArtifact(EVOLUTION_OF_RECORDED_SOUND);
  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }
  return (
    <>
      <div className="nav menu">
        <Link to="/station3" relative="path" className="nav-links" onClick={cancelSpeech}>
          {home}
        </Link>
        <Link to="/station3audio" relative="path" className="nav-links" onClick={cancelSpeech}>
          {audioTranslator.stationTitle}
        </Link>
        <Link to="/visible-electromagnetic-waves" relative="path" className="nav-links" onClick={cancelSpeech}>
          {electromagneticRadioWaves.stationTitle}
        </Link>
        <Link to="/evolution-recorded-sound" relative="path" className="nav-links" onClick={cancelSpeech}>
          {evolutionOfRecordedSound.stationTitle}
        </Link>
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6 className="white">Hub Station</h6>
        </Link>
      </div>
    </>
  )
}

export default NavStation3