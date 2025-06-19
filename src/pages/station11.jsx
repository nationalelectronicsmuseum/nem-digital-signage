import { Link } from "react-router-dom";

import sectionPlaceholder from "../assets/img/section.jpg"

function Station11() {
  return (
    <div>
        <div className="border">
                <h1 className="title">National Electronics Museum</h1>
        </div>

        <div className="homeLink">
        <Link to="/station11section1" relative="path" className="linkPage">
            <img src={sectionPlaceholder} className="homeImg"></img>
            <h2 className="stationPages">Section 1</h2>
        </Link>
        <Link to="/station11section2" relative="path" className="linkPage">
            <img src={sectionPlaceholder} className="homeImg"></img>
            <h2 className="stationPages">Section 2</h2>
        </Link>
        <Link to="/station11section3" relative="path" className="linkPage">
            <img src={sectionPlaceholder} className="homeImg"></img>
            <h2 className="stationPages">Section 3</h2>
        </Link>
        <Link to="/station11section4" relative="path" className="linkPage">
            <img src={sectionPlaceholder} className="homeImg"></img>
            <h2 className="stationPages">Section 4</h2>
        </Link>
        </div>
    </div>
  )
}

export default Station11