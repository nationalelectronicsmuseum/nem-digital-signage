import { Link } from "react-router-dom";
import Accessibility from "../components/accessibility/accessibility.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { VACUUM_TUBE_HISTORY, VACUUM_TUBE_TYPES, HOW_DO_VACUUM_TUBES_WORK } from "../assets/ArtifactTags.js";

import sectionPlaceholder from "../assets/img/section.jpg"

function Station8() {
  const vacuumTubeHistory = getLocalizedArtifact(VACUUM_TUBE_HISTORY);
  const vacuumTubeTypes = getLocalizedArtifact(VACUUM_TUBE_TYPES);
  const howDoVacuumTubesWork = getLocalizedArtifact(HOW_DO_VACUUM_TUBES_WORK);
    return (
        <div>
            <div className="accs">
                <Accessibility />
            </div>
            <div className="border">
                <h1 className="title">National Electronics Museum</h1>
            </div>

            <div className="homeLink">
                <Link to="/vacuumTubeHistory" relative="path" className="linkPage">
                    <img src={sectionPlaceholder} className="homeImg"></img>
                    <h2 className="stationPages">{vacuumTubeHistory.stationTitle}</h2>
                </Link>
                <Link to="/vacuumTubeTypes" relative="path" className="linkPage">
                    <img src={sectionPlaceholder} className="homeImg"></img>
                    <h2 className="stationPages">{vacuumTubeTypes.stationTitle}</h2>
                </Link>
                <Link to="/howDoVacuumTubesWork" relative="path" className="linkPage">
                    <img src={sectionPlaceholder} className="homeImg"></img>
                    <h2 className="stationPages">{howDoVacuumTubesWork.stationTitle}</h2>
                </Link>
            </div>
        </div>
    )
}

export default Station8