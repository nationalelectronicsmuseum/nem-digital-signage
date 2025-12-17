import { Link } from "react-router-dom";
import Accessibility from "../components/accessibility/accessibility.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import {
  SOUNDS_AT_SEA,
  SONAR_BEACON,
  SONAR_BUOYS,
  XBOT,
  VETERAN_SEAS,
} from "../assets/ArtifactTags.js";

import sectionPlaceholder from "../assets/img/section.jpg";
import millerGrantLogo from "../assets/img/millerGrant.png";

function Station11() {
  const soundsAtSea = getLocalizedArtifact(SOUNDS_AT_SEA);
  const sonarBeacon = getLocalizedArtifact(SONAR_BEACON);
  const sonarBuoys = getLocalizedArtifact(SONAR_BUOYS);
  const xBot = getLocalizedArtifact(XBOT);
  const veteranSeas = getLocalizedArtifact(VETERAN_SEAS);
  return (
    <div>
      <img className="grantLogo" src={millerGrantLogo} relative="path"></img>
      <div className="accs">
        <Accessibility />
      </div>

      <div className="border">
        <h1 className="title">National Electronics Museum</h1>
      </div>

      <div className="homeLink">
        <Link to="/soundsAtSea" relative="path" className="linkPage">
          <img src={sectionPlaceholder} className="homeImg"></img>
          <h2 className="stationPages">{soundsAtSea.stationTitle}</h2>
        </Link>
        <Link to="/sonarBeacon" relative="path" className="linkPage">
          <img src={sectionPlaceholder} className="homeImg"></img>
          <h2 className="stationPages">{sonarBeacon.stationTitle}</h2>
        </Link>
        <Link to="/sonarBuoys" relative="path" className="linkPage">
          <img src={sectionPlaceholder} className="homeImg"></img>
          <h2 className="stationPages">{sonarBuoys.stationTitle}</h2>
        </Link>
        <Link to="/xBot" relative="path" className="linkPage">
          <img src={sectionPlaceholder} className="homeImg"></img>
          <h2 className="stationPages">{xBot.stationTitle}</h2>
        </Link>
        <Link to="/veteranSeas" relative="path" className="linkPage">
          <img src={sectionPlaceholder} className="homeImg"></img>
          <h2 className="stationPages">{veteranSeas.stationTitle}</h2>
        </Link>
      </div>
    </div>
  );
}

export default Station11;
