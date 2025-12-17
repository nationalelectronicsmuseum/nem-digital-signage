import { Link } from "react-router-dom";
import Accessibility from "../components/accessibility/accessibility.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import {
  WHAT_IS_RADAR,
  TYPES_OF_RADAR,
  AWACS,
} from "../assets/ArtifactTags.js";

import sectionPlaceholder from "../assets/img/section.jpg";
import millerGrantLogo from "../assets/img/millerGrant.png";

function Station12() {
  const whatIsRadar = getLocalizedArtifact(WHAT_IS_RADAR);
  const typesOfRadar = getLocalizedArtifact(TYPES_OF_RADAR);
  const awacs = getLocalizedArtifact(AWACS);
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
        <Link to="/whatIsRadar" relative="path" className="linkPage">
          <img src={sectionPlaceholder} className="homeImg"></img>
          <h2 className="stationPages">{whatIsRadar.stationTitle}</h2>
        </Link>
        <Link to="/typesOfRadar" relative="path" className="linkPage">
          <img src={sectionPlaceholder} className="homeImg"></img>
          <h2 className="stationPages">{typesOfRadar.stationTitle}</h2>
        </Link>
        <Link to="/awacs" relative="path" className="linkPage">
          <img src={sectionPlaceholder} className="homeImg"></img>
          <h2 className="stationPages">{awacs.stationTitle}</h2>
        </Link>
      </div>
    </div>
  );
}

export default Station12;
