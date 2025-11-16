import { Link } from "react-router-dom";
import "./nav.css";
import { getLocalizedArtifact } from "../../assets/Localization.js";
import {
  SOUNDS_AT_SEA,
  SONAR_BEACON,
  SONAR_BUOYS,
  XBOT,
  VETERAN_SEAS,
} from "../../assets/ArtifactTags.js";

const NavStation11 = () => {
  const soundsAtSea = getLocalizedArtifact(SOUNDS_AT_SEA);
  const sonarBeacon = getLocalizedArtifact(SONAR_BEACON);
  const sonarBuoys = getLocalizedArtifact(SONAR_BUOYS);
  const xBot = getLocalizedArtifact(XBOT);
  const veteranSeas = getLocalizedArtifact(VETERAN_SEAS);

  const cancelSpeech = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <div>
      <div className="nav menu">
        <Link
          to="/soundsAtSea"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          {soundsAtSea.stationTitle}
        </Link>
        <Link
          to="/sonarBeacon"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          {sonarBeacon.stationTitle}
        </Link>
        <Link
          to="/sonarBuoys"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          {sonarBuoys.stationTitle}
        </Link>
        <Link
          to="/xBot"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          {xBot.stationTitle}
        </Link>
        <Link
          to="/veteranSeas"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          {veteranSeas.stationTitle}
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

export default NavStation11;
