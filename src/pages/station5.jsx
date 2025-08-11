import { Link } from "react-router-dom";
import microwaveHome from "../assets/img/microwaveHome.jpg"
import thereminHome from "../assets/img/thereminHome.jpg"
import Accessibility from "../components/accessibility/accessibility.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { WHY_DO_MICROWAVES_HAVE_TURNTABLES, THEREMIN } from "../assets/ArtifactTags.js";

export default function Station5() {
  const whyDoMicrowavesHaveTurntables = getLocalizedArtifact(WHY_DO_MICROWAVES_HAVE_TURNTABLES);
  const theremin = getLocalizedArtifact(THEREMIN);
  return (
    <div>
      <div className="accs">
        <Accessibility />
      </div>

      <div className="border">
        <h1 className="title">National Electronics Museum</h1>
      </div>

      <div className="homeLink">
        <Link to="/microwave-turntable" relative="path" className="linkPage">
          <img src={microwaveHome} className="homeImg"></img>
          <h2 className="stationPages">{whyDoMicrowavesHaveTurntables.stationTitle}</h2>
        </Link>
        <Link to="/theremin" relative="path" className="linkPage">
          <img src={thereminHome} className="homeImg"></img>
          <h2 className="stationPages">{theremin.stationTitle}</h2>
        </Link>
      </div>
    </div>
  )
}
