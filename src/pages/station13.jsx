import { Link } from "react-router-dom";
import Accessibility from "../components/accessibility/accessibility.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { DOPPLER_RADAR, BOMARC } from "../assets/ArtifactTags.js";

import sectionPlaceholder from "../assets/img/section.jpg"

function Station13() {
  const dopplerRadar = getLocalizedArtifact(DOPPLER_RADAR);
  const bomarc = getLocalizedArtifact(BOMARC);
    return (
        <div>
            <div className="accs">
                <Accessibility />
            </div>

            <div className="border">
                <h1 className="title">National Electronics Museum</h1>
            </div>

            <div className="homeLink">
                <Link to="/dopplerRadar" relative="path" className="linkPage">
                    <img src={sectionPlaceholder} className="homeImg"></img>
                    <h2 className="stationPages">{dopplerRadar.stationTitle}</h2>
                </Link>
                <Link to="/bomarc" relative="path" className="linkPage">
                    <img src={sectionPlaceholder} className="homeImg"></img>
                    <h2 className="stationPages">{bomarc.stationTitle}</h2>
                </Link>
            </div>
        </div>
    )
}

export default Station13