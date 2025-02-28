import React from 'react'
import { Link } from "react-router-dom";

import homePolar from "../assets/img/polarHome.png"
import homeWaves from "../assets/img/wavesHome.jpg"

export default function Station7() {
  return (
    <div>
       <div className="border">
          <h1 className="title">National Electronics Museum</h1>
        </div>
      <div className="homeLink">
              <Link to="/electromagnetic" relative="path" className="linkPage">
                  <img src={homeWaves} className="homeImg"></img>
                  <h2 className="stationPages">Electromagnetic Waves</h2>
              </Link>
              <Link to="/polarization" relative="path" className="linkPage">
                  <img src={homePolar} className="homeImg"></img>
                  <h2 className="stationPages">Polarization Experiment</h2>
              </Link>
              </div> 
    </div>
  )
}
