import { Link } from "react-router-dom";
import microwaveHome from "../assets/img/microwaveHome.jpg"
import thereminHome from "../assets/img/thereminHome.jpg"

export default function Station5() {
  return (
    <div>
      <div className="border">
        <h1 className="title">National Electronics Museum</h1>
      </div>

      <div className="homeLink">
        <Link to="/microwave-turntable" relative="path" className="linkPage">
            <img src={microwaveHome} className="homeImg"></img>
            <h2 className="stationPages">Why do Microwaves have Turntables?</h2>
        </Link>
        <Link to="/theremin" relative="path" className="linkPage">
            <img src={thereminHome} className="homeImg"></img>
            <h2 className="stationPages">Theremin</h2>
        </Link>
      </div>
    </div>
  )
}
