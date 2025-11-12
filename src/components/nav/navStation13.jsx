import { Link } from "react-router-dom";
import "./nav.css"
import { getLocalizedArtifact } from "../../assets/Localization.js";
import { DOPPLER_RADAR, BOMARC } from "../../assets/ArtifactTags.js";

const NavStation13 = () => {
  const dopplerRadar = getLocalizedArtifact(DOPPLER_RADAR);
  const bomarc = getLocalizedArtifact(BOMARC);

  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }

  return (
    <div>
      <div className="nav menu">
        <Link to="/station13" relative="path" className="nav-links" onClick={cancelSpeech}>
          Home
        </Link>
        <Link to="/dopplerRadar" relative="path" className="nav-links" onClick={cancelSpeech}>
        {dopplerRadar.stationTitle}
        </Link>
        <Link to="/bomarc" relative="path" className="nav-links" onClick={cancelSpeech}>
        {bomarc.stationTitle}
        </Link>
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6 className="white">Hub Station</h6>
        </Link>
      </div>
      
      
    </div>
  );
};

export default NavStation13;
