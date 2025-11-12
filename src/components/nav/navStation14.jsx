import { Link } from "react-router-dom";
import "./nav.css"
import { getLocalizedArtifact } from "../../assets/Localization.js";
import { WHAT_ARE_COUNTERMEASURES, CHAFF, DECOYS, TYPES_OF_COUNTERMEASURES, COUNTERMEASURE_BIOGRAPHY } from "../../assets/ArtifactTags.js";

const NavStation14 = () => {
  const whatAreCountermeasures = getLocalizedArtifact(WHAT_ARE_COUNTERMEASURES);
  const chaff = getLocalizedArtifact(CHAFF);
  const decoys = getLocalizedArtifact(DECOYS);
  const typesOfCountermeasures = getLocalizedArtifact(TYPES_OF_COUNTERMEASURES);
  const countermeasureBiography = getLocalizedArtifact(COUNTERMEASURE_BIOGRAPHY);

  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }

  return (
    <div>
      <div className="nav menu">
        <Link to="/station14" relative="path" className="nav-links" onClick={cancelSpeech}>
          Home
        </Link>
        <Link to="/whatAreCountermeasures" relative="path" className="nav-links" onClick={cancelSpeech}>
        {whatAreCountermeasures.stationTitle}
        </Link>
        <Link to="/chaff" relative="path" className="nav-links" onClick={cancelSpeech}>
        {chaff.stationTitle}
        </Link>
        <Link to="/decoys" relative="path" className="nav-links" onClick={cancelSpeech}>
        {decoys.stationTitle}
        </Link>
        <Link to="/typesOfCountermeasures" relative="path" className="nav-links" onClick={cancelSpeech}>
        {typesOfCountermeasures.stationTitle}
        </Link>
        <Link to="/countermeasureBiography" relative="path" className="nav-links" onClick={cancelSpeech}>
        {countermeasureBiography.stationTitle}
        </Link>
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6 className="white">Hub Station</h6>
        </Link>
      </div>
      
      
    </div>
  );
};

export default NavStation14;
