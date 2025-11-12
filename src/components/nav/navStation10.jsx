import { Link } from "react-router-dom";
import "./nav.css"
import { getLocalizedArtifact } from "../../assets/Localization.js";
import { PROXIMITY_FUSE, SCR_270, SCR_399 } from "../../assets/ArtifactTags.js";

const NavStation10 = () => {
  const proximityFuse = getLocalizedArtifact(PROXIMITY_FUSE);
  const scr270 = getLocalizedArtifact(SCR_270);
  const scr399 = getLocalizedArtifact(SCR_399);

  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }

  return (
    <div>
      <div className="nav menu">
        <Link to="/station10" relative="path" className="nav-links" onClick={cancelSpeech}>
          Home
        </Link>
        <Link to="/proximityFuse" relative="path" className="nav-links" onClick={cancelSpeech}>
        {proximityFuse.stationTitle}
        </Link>
        <Link to="/scr270" relative="path" className="nav-links" onClick={cancelSpeech}>
        {scr270.stationTitle}
        </Link>
        <Link to="/scr399" relative="path" className="nav-links" onClick={cancelSpeech}>
        {scr399.stationTitle}
        </Link>
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6 className="white">Hub Station</h6>
        </Link>
      </div>
      
      
    </div>
  );
};

export default NavStation10;
