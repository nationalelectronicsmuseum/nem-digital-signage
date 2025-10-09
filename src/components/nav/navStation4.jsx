import { Link } from "react-router-dom";
import { AUDIO_TRANSLATOR, TELEGRAPH_MACHINE, THE_MARCONI_MAGNETIC_DETECTOR } from "../../assets/ArtifactTags.js";
import { getLocalizedArtifact, getLocalizedStringConstant } from "../../assets/Localization.js";

import "./nav.css";

const NavStation4 = () => {
  const home = getLocalizedStringConstant("Home");
  const audioTranslator = getLocalizedArtifact(AUDIO_TRANSLATOR);
  const telegraphMachine = getLocalizedArtifact(TELEGRAPH_MACHINE);
  const marconiMagneticDetector = getLocalizedArtifact(THE_MARCONI_MAGNETIC_DETECTOR);
  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }
  return (
    <>
      <div className="nav menu">
        <Link to="/station4" relative="path" className="nav-links" onClick={cancelSpeech}>
          {home}
        </Link>
        <Link to="/telegraph" relative="path" className="nav-links" onClick={cancelSpeech}>
          {telegraphMachine.stationTitle}
        </Link>
        <Link to="/marconi" relative="path" className="nav-links" onClick={cancelSpeech}>
          {marconiMagneticDetector.stationTitle}
        </Link>
        <Link to="/station4audio" relative="path" className="nav-links" onClick={cancelSpeech}>
          {audioTranslator.stationTitle}
        </Link>
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6 className="white">Hub Station</h6>
        </Link>
      </div>
    </>
  )
}

export default NavStation4