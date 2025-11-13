import { Link } from "react-router-dom";
import Accessibility from "../components/accessibility/accessibility.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { WHAT_IS_DOPPLER, DOPPLER_HISTORY, BOMARC, MODERN_DOPPLER_USE, DOPPLER_ORAL_HISTORY } from "../assets/ArtifactTags.js";

import sectionPlaceholder from "../assets/img/section.jpg"

function Station13() {
  const whatIsDoppler = getLocalizedArtifact(WHAT_IS_DOPPLER);
  const dopplerHistory = getLocalizedArtifact(DOPPLER_HISTORY);
  const bomarc = getLocalizedArtifact(BOMARC);
  const modernDopplerUse = getLocalizedArtifact(MODERN_DOPPLER_USE);
  const dopplerOralHistory = getLocalizedArtifact(DOPPLER_ORAL_HISTORY);
    return (
        <div>
            <div className="accs">
                <Accessibility />
            </div>

            <div className="border">
                <h1 className="title">National Electronics Museum</h1>
            </div>

            <div className="homeLink">
                <Link to="/whatIsDoppler" relative="path" className="linkPage">
                    <img src={sectionPlaceholder} className="homeImg"></img>
                    <h2 className="stationPages">{whatIsDoppler.stationTitle}</h2>
                </Link>
                <Link to="/dopplerHistory" relative="path" className="linkPage">
                    <img src={sectionPlaceholder} className="homeImg"></img>
                    <h2 className="stationPages">{dopplerHistory.stationTitle}</h2>
                </Link>
                <Link to="/bomarc" relative="path" className="linkPage">
                    <img src={sectionPlaceholder} className="homeImg"></img>
                    <h2 className="stationPages">{bomarc.stationTitle}</h2>
                </Link>
                <Link to="/modernDopplerUse" relative="path" className="linkPage">
                    <img src={sectionPlaceholder} className="homeImg"></img>
                    <h2 className="stationPages">{modernDopplerUse.stationTitle}</h2>
                </Link>
                <Link to="/dopplerOralHistory" relative="path" className="linkPage">
                    <img src={sectionPlaceholder} className="homeImg"></img>
                    <h2 className="stationPages">{dopplerOralHistory.stationTitle}</h2>
                </Link>
            </div>
        </div>
    )
}

export default Station13