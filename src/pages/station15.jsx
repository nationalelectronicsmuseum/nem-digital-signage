import { Link } from "react-router-dom";
import Accessibility from "../components/accessibility/accessibility.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import {
  SATELLITES_AND_HOW_THEY_WORK,
  LUNAR_CAMERA,
  TELSTAR,
} from "../assets/ArtifactTags.js";

import sectionPlaceholder from "../assets/img/section.jpg";
import millerGrantLogo from "../assets/img/millerGrant.png";

function Station15() {
  const satellitesAndHowTheyWork = getLocalizedArtifact(
    SATELLITES_AND_HOW_THEY_WORK
  );
  const lunarCamera = getLocalizedArtifact(LUNAR_CAMERA);
  const telstar = getLocalizedArtifact(TELSTAR);
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
        <Link
          to="/satellitesAndHowTheyWork"
          relative="path"
          className="linkPage"
        >
          <img src={sectionPlaceholder} className="homeImg"></img>
          <h2 className="stationPages">
            {satellitesAndHowTheyWork.stationTitle}
          </h2>
        </Link>
        <Link to="/lunarCamera" relative="path" className="linkPage">
          <img src={sectionPlaceholder} className="homeImg"></img>
          <h2 className="stationPages">{lunarCamera.stationTitle}</h2>
        </Link>
        <Link to="/telstar" relative="path" className="linkPage">
          <img src={sectionPlaceholder} className="homeImg"></img>
          <h2 className="stationPages">{telstar.stationTitle}</h2>
        </Link>
      </div>
    </div>
  );
}

export default Station15;
