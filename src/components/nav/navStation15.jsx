import { Link } from "react-router-dom";
import "./nav.css";
import { getLocalizedArtifact } from "../../assets/Localization.js";
import {
  SATELLITES_AND_HOW_THEY_WORK,
  LUNAR_CAMERA,
  TELSTAR,
} from "../../assets/ArtifactTags.js";

const NavStation15 = () => {
  const satellitesAndHowTheyWork = getLocalizedArtifact(
    SATELLITES_AND_HOW_THEY_WORK
  );
  const lunarCamera = getLocalizedArtifact(LUNAR_CAMERA);
  const telstar = getLocalizedArtifact(TELSTAR);

  const cancelSpeech = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <div>
      <div className="nav menu">
        <Link
          to="/station15"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          Home
        </Link>
        <Link
          to="/satellitesAndHowTheyWork"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          {satellitesAndHowTheyWork.stationTitle}
        </Link>
        <Link
          to="/lunarCamera"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          {lunarCamera.stationTitle}
        </Link>
        <Link
          to="/telstar"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          {telstar.stationTitle}
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

export default NavStation15;
