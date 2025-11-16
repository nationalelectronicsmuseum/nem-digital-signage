import { Link } from "react-router-dom";
import "./nav.css";
import { getLocalizedArtifact } from "../../assets/Localization.js";
import {
  WHAT_IS_DOPPLER,
  DOPPLER_HISTORY,
  BOMARC,
  MODERN_DOPPLER_USE,
  DOPPLER_ORAL_HISTORY,
} from "../../assets/ArtifactTags.js";

const NavStation13 = () => {
  const whatIsDoppler = getLocalizedArtifact(WHAT_IS_DOPPLER);
  const dopplerHistory = getLocalizedArtifact(DOPPLER_HISTORY);
  const bomarc = getLocalizedArtifact(BOMARC);
  const modernDopplerUse = getLocalizedArtifact(MODERN_DOPPLER_USE);
  const dopplerOralHistory = getLocalizedArtifact(DOPPLER_ORAL_HISTORY);

  const cancelSpeech = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <div>
      <div className="nav menu">
        <Link
          to="/station13"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          Home
        </Link>
        <Link
          to="/whatIsDoppler"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          {whatIsDoppler.stationTitle}
        </Link>
        <Link
          to="/dopplerHistory"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          {dopplerHistory.stationTitle}
        </Link>
        <Link
          to="/bomarc"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          {bomarc.stationTitle}
        </Link>
        <Link
          to="/modernDopplerUse"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          {modernDopplerUse.stationTitle}
        </Link>
        <Link
          to="/dopplerOralHistory"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          {dopplerOralHistory.stationTitle}
        </Link>
        <Link
          to="/"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          <h6 className="white">Hub Station</h6>
        </Link>
      </div>
    </div>
  );
};

export default NavStation13;
