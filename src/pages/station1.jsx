import { Link } from "react-router-dom";
import homeOersted from "../assets/img/oersted1.jpg"
import homeBatt from "../assets/img/humanbatt.png"
import homeFaraday from "../assets/img/faraday.png"
import homeVolt from "../assets/img/voltcurr.png"
import Accessibility from "../components/accessibility/accessibility.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { VOLTAGE_AND_CURRENT, HUMAN_BATTERY, OERSTED, THE_FARADAY_PROJECT } from "../assets/ArtifactTags.js";

function Station1() {
    const voltageAndCurrent = getLocalizedArtifact(VOLTAGE_AND_CURRENT);
    const humanBattery = getLocalizedArtifact(HUMAN_BATTERY);
    const oersted = getLocalizedArtifact(OERSTED);
    const theFaradayProject = getLocalizedArtifact(THE_FARADAY_PROJECT);
  return (
    <div>
        <div className="accs">
                  <Accessibility />
        </div>

        <div className="border">
                <h1 className="title">National Electronics Museum</h1>
        </div>

        <div className="homeLink">
        <Link to="/voltage-and-current" relative="path" className="linkPage">
            <img src={homeVolt} className="homeImg"></img>
            <h2 className="stationPages">{voltageAndCurrent.stationTitle}</h2>
        </Link>
        <Link to="/human-battery" relative="path" className="linkPage">
            <img src={homeBatt} className="homeImg"></img>
            <h2 className="stationPages">{humanBattery.stationTitle}</h2>
        </Link>
        <Link to="/oersted" relative="path" className="linkPage">
            <img src={homeOersted} className="homeImg"></img>
            <h2 className="stationPages">{oersted.stationTitle}</h2>
        </Link>
        <Link to="/faraday" relative="path" className="linkPage">
            <img src={homeFaraday} className="homeImg"></img>
            <h2 className="stationPages">{theFaradayProject.stationTitle}</h2>
        </Link>
        </div>
    </div>
  )
}

export default Station1