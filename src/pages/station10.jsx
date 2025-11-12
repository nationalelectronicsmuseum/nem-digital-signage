import { Link } from "react-router-dom";
import Accessibility from "../components/accessibility/accessibility.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { PROXIMITY_FUSE, SCR_270, SCR_399 } from "../assets/ArtifactTags.js";

import sectionPlaceholder from "../assets/img/section.jpg"

function Station10() {
  const proximityFuse = getLocalizedArtifact(PROXIMITY_FUSE);
  const scr270 = getLocalizedArtifact(SCR_270);
  const scr399 = getLocalizedArtifact(SCR_399);
    return (
        <div>
            <div className="accs">
                <Accessibility />
            </div>

            <div className="border">
                <h1 className="title">National Electronics Museum</h1>
            </div>

            <div className="homeLink">
                <Link to="/proximityFuse" relative="path" className="linkPage">
                    <img src={sectionPlaceholder} className="homeImg"></img>
                    <h2 className="stationPages">{proximityFuse.stationTitle}</h2>
                </Link>
                <Link to="/scr270" relative="path" className="linkPage">
                    <img src={sectionPlaceholder} className="homeImg"></img>
                    <h2 className="stationPages">{scr270.stationTitle}</h2>
                </Link>
                <Link to="/scr399" relative="path" className="linkPage">
                    <img src={sectionPlaceholder} className="homeImg"></img>
                    <h2 className="stationPages">{scr399.stationTitle}</h2>
                </Link>
            </div>
        </div>
    )
}

export default Station10