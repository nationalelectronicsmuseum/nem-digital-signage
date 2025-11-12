import { Link } from "react-router-dom";
import Accessibility from "../components/accessibility/accessibility.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { WHAT_ARE_COUNTERMEASURES, CHAFF, DECOYS, TYPES_OF_COUNTERMEASURES, COUNTERMEASURE_BIOGRAPHY } from "../assets/ArtifactTags.js";

import sectionPlaceholder from "../assets/img/section.jpg"

function Station14() {
  const whatAreCountermeasures = getLocalizedArtifact(WHAT_ARE_COUNTERMEASURES);
  const chaff = getLocalizedArtifact(CHAFF);
  const decoys = getLocalizedArtifact(DECOYS);
  const typesOfCountermeasures = getLocalizedArtifact(TYPES_OF_COUNTERMEASURES);
  const countermeasureBiography = getLocalizedArtifact(COUNTERMEASURE_BIOGRAPHY);
    return (
        <div>
            <div className="accs">
                <Accessibility />
            </div>

            <div className="border">
                <h1 className="title">National Electronics Museum</h1>
            </div>

            <div className="homeLink">
                <Link to="/whatAreCountermeasures" relative="path" className="linkPage">
                    <img src={sectionPlaceholder} className="homeImg"></img>
                    <h2 className="stationPages">{whatAreCountermeasures.stationTitle}</h2>
                </Link>
                <Link to="/chaff" relative="path" className="linkPage">
                    <img src={sectionPlaceholder} className="homeImg"></img>
                    <h2 className="stationPages">{chaff.stationTitle}</h2>
                </Link>
                <Link to="/decoys" relative="path" className="linkPage">
                    <img src={sectionPlaceholder} className="homeImg"></img>
                    <h2 className="stationPages">{decoys.stationTitle}</h2>
                </Link>
                <Link to="/typesOfCountermeasures" relative="path" className="linkPage">
                    <img src={sectionPlaceholder} className="homeImg"></img>
                    <h2 className="stationPages">{typesOfCountermeasures.stationTitle}</h2>
                </Link>
                <Link to="/countermeasureBiography" relative="path" className="linkPage">
                    <img src={sectionPlaceholder} className="homeImg"></img>
                    <h2 className="stationPages">{countermeasureBiography.stationTitle}</h2>
                </Link>
            </div>
        </div>
    )
}

export default Station14