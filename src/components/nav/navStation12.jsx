import { Link } from "react-router-dom";
import "./nav.css"
import { getLocalizedArtifact } from "../../assets/Localization.js";
import { WHAT_IS_RADAR, TYPES_OF_RADAR, AWACS } from "../../assets/ArtifactTags.js";

const NavStation12 = () => {
  const whatIsRadar = getLocalizedArtifact(WHAT_IS_RADAR);
  const typesOfRadar = getLocalizedArtifact(TYPES_OF_RADAR);
  const awacs = getLocalizedArtifact(AWACS);

  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }

  return (
    <div>
      <div className="nav menu">
        <Link to="/station12" relative="path" className="nav-links" onClick={cancelSpeech}>
          Home
        </Link>
        <Link to="/whatIsRadar" relative="path" className="nav-links" onClick={cancelSpeech}>
        {whatIsRadar.stationTitle}
        </Link>
        <Link to="/typesOfRadar" relative="path" className="nav-links" onClick={cancelSpeech}>
        {typesOfRadar.stationTitle}
        </Link>
        <Link to="/awacs" relative="path" className="nav-links" onClick={cancelSpeech}>
        {awacs.stationTitle}
        </Link>
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6 className="white">Hub Station</h6>
        </Link>
      </div>
      
      
    </div>
  );
};

export default NavStation12;
