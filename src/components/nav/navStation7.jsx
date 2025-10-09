import { Link } from "react-router-dom";
import { ELECTROMAGNETIC_WAVES, POLARIZATION_EXPERIMENT } from "../../assets/ArtifactTags.js";
import { getLocalizedArtifact, getLocalizedStringConstant } from "../../assets/Localization.js";

import "./nav.css"

const NavStation7 = () => {
  const home = getLocalizedStringConstant("Home");
  const electromagneticWaves = getLocalizedArtifact(ELECTROMAGNETIC_WAVES);
  const polarizationExperiment = getLocalizedArtifact(POLARIZATION_EXPERIMENT);
  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }

  return (
    <div>
      <div className="nav menu">
        <Link to="/station7" relative="path" className="nav-links" onClick={cancelSpeech}>
          {home}
        </Link>
        <Link to="/electromagnetic" relative="path" className="nav-links" onClick={cancelSpeech}>
          {electromagneticWaves.stationTitle}
        </Link>
        <Link to="/polarization" relative="path" className="nav-links" onClick={cancelSpeech}>
          {polarizationExperiment.stationTitle}
        </Link>
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6 className="white">Hub Station</h6>
        </Link>
      </div>


    </div>
  );
};

export default NavStation7;
