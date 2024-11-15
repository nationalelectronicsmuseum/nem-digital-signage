import React from 'react'
import { Link } from "react-router-dom";
import jumpingwiresImg from "../assets/img/jumpingwire.svg"
import jacobsladderImg from "../assets/img/jacobsladder.svg"
import staticImg from "../assets/img/static.svg"
import turbineImg from "../assets/img/turbine.svg"

import homeJacobs from "../assets/img/jacobs2.jpg"
// import home from "../assets/img/"
// import home from "../assets/img/"
// import home from "../assets/img/"

export default function Station2() {
  return (
    <div>
      <div className="border">
                <h1 className="title">National Electronics Museum</h1>
        </div>

        <div className="homeLink">
        <Link to="/jumping-wires" relative="path" className="linkPage">
            <img src={jumpingwiresImg} className="homeImg"></img>
            <h2 className="stationPages">Jumping Wire</h2>
        </Link>
        <Link to="/jacobs-ladder" relative="path" className="linkPage">
            <img src={homeJacobs} className="homeImg"></img>
            <h2 className="stationPages">Jacob's Ladder Experiment</h2>
        </Link>
        <Link to="/static-electricity" relative="path" className="linkPage">
            <img src={staticImg} className="homeImg"></img>
            <h2 className="stationPages">Static Electricity</h2>
        </Link>
        {/* <Link to="/manual-turbine" relative="path" className="linkPage">
            <img src={turbineImg} className="homeImg"></img>
            <h2 className="stationPages">Manual Turbine</h2>
        </Link> */}
        </div>
    </div>
  )
}
