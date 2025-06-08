import { Link } from "react-router-dom";

import homeOersted from "../assets/img/oersted1.jpg"
import homeBatt from "../assets/img/humanbatt.png"
import homeFaraday from "../assets/img/faraday.png"
import homeVolt from "../assets/img/voltcurr.png"

function Station1() {
  return (
    <div>
        <div className="border">
                <h1 className="title">National Electronics Museum</h1>
        </div>

        <div className="homeLink">
        <Link to="/voltage-and-current" relative="path" className="linkPage">
            <img src={homeVolt} className="homeImg"></img>
            <h2 className="stationPages">Voltage and Current</h2>
        </Link>
        <Link to="/human-battery" relative="path" className="linkPage">
            <img src={homeBatt} className="homeImg"></img>
            <h2 className="stationPages">Human Battery</h2>
        </Link>
        <Link to="/oersted" relative="path" className="linkPage">
            <img src={homeOersted} className="homeImg"></img>
            <h2 className="stationPages">Oersted</h2>
        </Link>
        <Link to="/faraday" relative="path" className="linkPage">
            <img src={homeFaraday} className="homeImg"></img>
            <h2 className="stationPages">The Faraday Project</h2>
        </Link>
        </div>
    </div>
  )
}

export default Station1