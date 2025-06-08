import { Link } from "react-router-dom";

import homeMarconi from "../assets/img/marconi1.jpg"
import homeAudio from "../assets/img/audiotrans1.jpg"
import homeRecord from "../assets/img/AudioHome.jfif"
import homeEwaves from "../assets/img/ewaves1.webp"


export default function Station3() {
  return (
    <div>
      <div className="border">
        <h1 className="title">National Electronics Museum</h1>
      </div>

      <div className="homeLink">
        <Link to="/marconi" relative="path" className="linkPage">
            <img src={homeMarconi} className="homeImg"></img>
            <h2 className="stationPages">The Marconi Magnetic Detector</h2>
        </Link>
        <Link to="/audio" relative="path" className="linkPage">
            <img src={homeAudio} className="homeImg"></img>
            <h2 className="stationPages">The Audio Translator</h2>
        </Link>
        <Link to="/visible-electromagnetic-waves" relative="path">
            <img src={homeEwaves} className="homeImg"></img>
            <h2 className="stationPages">Electromagnetic Waves</h2>
        </Link>
        <Link to="/evolution-recorded-sound" relative="path">
            <img src={homeRecord} className="homeImg"></img>
            <h2 className="stationPages">Evolution of Recorded Sound</h2>
        </Link>
      </div>

    </div>
  )
}
