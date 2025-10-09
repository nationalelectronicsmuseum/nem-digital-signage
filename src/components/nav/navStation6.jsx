import { Link } from "react-router-dom";
import { THEREMIN, INFRARED, BOMBSIGHTS } from "../../assets/ArtifactTags.js";
import { getLocalizedArtifact, getLocalizedStringConstant } from "../../assets/Localization.js";

import "./nav.css";

function navStation6() {
  const home = getLocalizedStringConstant("Home");
  const theremin = getLocalizedArtifact(THEREMIN);
  const infrared = getLocalizedArtifact(INFRARED);
  const bombsights = getLocalizedArtifact(BOMBSIGHTS);
  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }

  return (
    <div>
      <div className="nav menu">
        <Link to="/station6" relative="path" className="nav-links" onClick={cancelSpeech}>
          {home}
        </Link>
        <Link to="/infrared" relative="path" className="nav-links" onClick={cancelSpeech}>
          {infrared.stationTitle}
        </Link>
        <Link to="/theremin" relative="path" className="nav-links" onClick={cancelSpeech}>
          {theremin.stationTitle}
        </Link>
        <Link to="/bombsights" relative="path" className="nav-links" onClick={cancelSpeech}>
          {bombsights.stationTitle}
        </Link>
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6 className="white">Hub Station</h6>
        </Link>
      </div>
    </div>
  )
}

export default navStation6