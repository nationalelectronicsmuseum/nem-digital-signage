import { Link } from "react-router-dom";
import homeJacobs from "../assets/img/jacobs2.jpg"
import homeJumpwire from "../assets/img/jumpwire1.jpg"
import homeStatic from "../assets/img/static.png"
import homeGraaff from "../assets/img/graaff1.jpg"
import Accessibility from "../components/accessibility/accessibility.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { JUMPING_WIRE, JACOBS_LADDER_EXPERIMENT, STATIC_ELECTRICITY, VAN_DE_GRAAFF_GENERATOR } from "../assets/ArtifactTags.js";

export default function Station2() {
    const jumpingWire = getLocalizedArtifact(JUMPING_WIRE);
    const jacobsLadderExperiment = getLocalizedArtifact(JACOBS_LADDER_EXPERIMENT);
    const staticElectricity = getLocalizedArtifact(STATIC_ELECTRICITY);
    const vanDeGraaffGenerator = getLocalizedArtifact(VAN_DE_GRAAFF_GENERATOR);
    return (
        <div>
            <div className="accs">
                <Accessibility />
            </div>
            <div className="border">
                <h1 className="title">National Electronics Museum</h1>
            </div>

            <div className="homeLink">
                <Link to="/jumping-wires" relative="path" className="linkPage">
                    <img src={homeJumpwire} className="homeImg"></img>
                    <h2 className="stationPages">{jumpingWire.stationTitle}</h2>
                </Link>
                <Link to="/jacobs-ladder" relative="path" className="linkPage">
                    <img src={homeJacobs} className="homeImg"></img>
                    <h2 className="stationPages">{jacobsLadderExperiment.stationTitle}</h2>
                </Link>
                <Link to="/static-electricity" relative="path" className="linkPage">
                    <img src={homeStatic} className="homeImg"></img>
                    <h2 className="stationPages">{staticElectricity.stationTitle}</h2>
                </Link>
                <Link to="/vandegraaff" relative="path" className="linkPage">
                    <img src={homeGraaff} className="homeImg"></img>
                    <h2 className="stationPages">{vanDeGraaffGenerator.stationTitle}</h2>
                </Link>
            </div>
        </div>
    )
}
