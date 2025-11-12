import { Link } from "react-router-dom";
import "./nav.css"
import { getLocalizedArtifact } from "../../assets/Localization.js";
import { VACUUM_TUBE_HISTORY, VACUUM_TUBE_TYPES, HOW_DO_VACUUM_TUBES_WORK } from "../../assets/ArtifactTags.js";

const NavStation8 = () => {
  const vacuumTubeHistory = getLocalizedArtifact(VACUUM_TUBE_HISTORY);
  const vacuumTubeTypes = getLocalizedArtifact(VACUUM_TUBE_TYPES);
  const howDoVacuumTubesWork = getLocalizedArtifact(HOW_DO_VACUUM_TUBES_WORK);

  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }

  return (
    <div>
      <div className="nav menu">
        <Link to="/station8" relative="path" className="nav-links" onClick={cancelSpeech}>
          Home
        </Link>
        <Link to="/vacuumTubeHistory" relative="path" className="nav-links" onClick={cancelSpeech}>
        {vacuumTubeHistory.stationTitle}
        </Link>
        <Link to="/vacuumTubeTypes" relative="path" className="nav-links" onClick={cancelSpeech}>
        {vacuumTubeTypes.stationTitle}
        </Link>
        <Link to="/howDoVacuumTubesWork" relative="path" className="nav-links" onClick={cancelSpeech}>
        {howDoVacuumTubesWork.stationTitle}
        </Link>
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6 className="white">Hub Station</h6>
        </Link>
      </div>
      
      
    </div>
  );
};

export default NavStation8;
