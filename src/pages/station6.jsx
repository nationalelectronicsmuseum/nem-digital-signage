import { Link } from "react-router-dom";
import infraredThumbnail from "../assets/img/section.jpg";
import thereminThumbnail from "../assets/img/thereminHome.jpg";
import bombsightsThumbnail from "../assets/img/section.jpg";
import { THEREMIN, INFRARED, BOMBSIGHTS } from "../assets/ArtifactTags.js";
import Accessibility from "../components/accessibility/accessibility.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";

export default function Station6() {
  const theremin = getLocalizedArtifact(THEREMIN);
  const infrared = getLocalizedArtifact(INFRARED);
  const bombsights = getLocalizedArtifact(BOMBSIGHTS);

  return (
    <div>
      <div className="accs">
        <Accessibility />
      </div>

      <div className="border">
        <h1 className="title">National Electronics Museum</h1>
      </div>

      <div className="homeLink">
        <Link to="/infrared" relative="path">
          <img src={infraredThumbnail} className="homeImg"></img>
          <h2 className="stationPages">{infrared.stationTitle}</h2>
        </Link>
        <Link to="/theremin" relative="path">
          <img src={thereminThumbnail} className="homeImg"></img>
          <h2 className="stationPages">{theremin.stationTitle}</h2>
        </Link>
        <Link to="/bombsights" relative="path">
          <img src={bombsightsThumbnail} className="homeImg"></img>
          <h2 className="stationPages">{bombsights.stationTitle}</h2>
        </Link>
      </div>
    </div>
  );
}
