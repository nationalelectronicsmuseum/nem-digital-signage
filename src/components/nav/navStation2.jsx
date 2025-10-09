import { Link } from "react-router-dom";
import { JUMPING_WIRE, JACOBS_LADDER_EXPERIMENT, STATIC_ELECTRICITY, VAN_DE_GRAAFF_GENERATOR, HUMAN_DYNAMO } from "../../assets/ArtifactTags.js";
import { getLocalizedArtifact, getLocalizedStringConstant } from "../../assets/Localization.js";

import "./nav.css";

const NavStation2 = () => {
  const home = getLocalizedStringConstant("Home");
  const jumpingWire = getLocalizedArtifact(JUMPING_WIRE);
  const jacobsLadderExperiment = getLocalizedArtifact(JACOBS_LADDER_EXPERIMENT);
  const staticElectricity = getLocalizedArtifact(STATIC_ELECTRICITY);
  const vanDeGraaffGenerator = getLocalizedArtifact(VAN_DE_GRAAFF_GENERATOR);
  const humanDynamo = getLocalizedArtifact(HUMAN_DYNAMO);
  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }
  return (
    <>
      <div className="nav menu">
        <Link to="/station2" relative="path" className="nav-links" onClick={cancelSpeech}>
          {home}
        </Link>
        <Link to="/jumping-wires" relative="path" className="nav-links" onClick={cancelSpeech}>
          {jumpingWire.stationTitle}
        </Link>
        <Link to="/static-electricity" relative="path" className="nav-links" onClick={cancelSpeech}>
          {staticElectricity.stationTitle}
        </Link>
        <Link to="/human-dynamo" relative="path" className="nav-links" onClick={cancelSpeech}>
          {humanDynamo.stationTitle}
        </Link>
        <Link to="/vandegraaff" relative="path" className="nav-links" onClick={cancelSpeech}>
          {vanDeGraaffGenerator.stationTitle}
        </Link>
        <Link to="/jacobs-ladder" relative="path" className="nav-links" onClick={cancelSpeech}>
          {jacobsLadderExperiment.stationTitle}
        </Link>
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6 className="white">Hub Station</h6>
        </Link>
      </div>
    </>
  );
};

export default NavStation2;
