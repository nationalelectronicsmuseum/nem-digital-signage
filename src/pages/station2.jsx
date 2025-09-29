import { Link } from "react-router-dom";
import homeJacobs from "../assets/img/jacobs2.jpg"
import homeJumpwire from "../assets/img/jumpwire1.jpg"
import staticElectricityThumbnail from "../assets/img/static-electricity-section-thumbnail.jpg"
import humanDynamoThumbnail from "../assets/img/section.jpg"
import homeGraaff from "../assets/img/graaff1.jpg"
import Accessibility from "../components/accessibility/accessibility.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { JUMPING_WIRE, JACOBS_LADDER_EXPERIMENT, STATIC_ELECTRICITY, VAN_DE_GRAAFF_GENERATOR, HUMAN_DYNAMO } from "../assets/ArtifactTags.js";

export default function Station2() {
    const jumpingWire = getLocalizedArtifact(JUMPING_WIRE);
    const jacobsLadderExperiment = getLocalizedArtifact(JACOBS_LADDER_EXPERIMENT);
    const staticElectricity = getLocalizedArtifact(STATIC_ELECTRICITY);
    const vanDeGraaffGenerator = getLocalizedArtifact(VAN_DE_GRAAFF_GENERATOR);
    const humanDynamo = getLocalizedArtifact(HUMAN_DYNAMO);
    return (
        <div>
            <div className="accs">
                <Accessibility />
            </div>
            <div className="border">
                <h1 className="title">National Electronics Museum</h1>
            </div>

            <div className="homeLink" style={{maxWidth: "70vw"}}>
                <Link to="/jumping-wires" relative="path" className="linkPage">
                    <img src={homeJumpwire} className="homeImg"></img>
                    <h2 className="stationPages">{jumpingWire.stationTitle}</h2>
                </Link>
                <Link to="/static-electricity" relative="path" className="linkPage">
                    <img src={staticElectricityThumbnail} className="homeImg"></img>
                    <h2 className="stationPages">{staticElectricity.stationTitle}</h2>
                </Link>
                <Link to="/human-dynamo" relative="path" className="linkPage">
                    <img src={humanDynamoThumbnail} className="homeImg"></img>
                    <h2 className="stationPages">{humanDynamo.stationTitle}</h2>
                </Link>
                <Link to="/vandegraaff" relative="path" className="linkPage">
                    <img src={homeGraaff} className="homeImg"></img>
                    <h2 className="stationPages">{vanDeGraaffGenerator.stationTitle}</h2>
                </Link>
                <Link to="/jacobs-ladder" relative="path" className="linkPage">
                    <img src={homeJacobs} className="homeImg"></img>
                    <h2 className="stationPages">{jacobsLadderExperiment.stationTitle}</h2>
                </Link>
            </div>
        </div>
    )
}
