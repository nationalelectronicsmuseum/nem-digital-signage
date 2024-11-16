import React from 'react'
import { Link } from "react-router-dom";

import homeJacobs from "../assets/img/jacobs2.jpg"
import homeJumpwire from "../assets/img/jumpwire1.jpg"
import homeStatic from "../assets/img/static.png"
import homeGraaff from "../assets/img/graaff1.jpg"

export default function Station2() {
  return (
    <div>
      <div className="border">
                <h1 className="title">National Electronics Museum</h1>
        </div>

        <div className="homeLink">
        <Link to="/jumping-wires" relative="path" className="linkPage">
            <img src={homeJumpwire} className="homeImg"></img>
            <h2 className="stationPages">Jumping Wire</h2>
        </Link>
        <Link to="/jacobs-ladder" relative="path" className="linkPage">
            <img src={homeJacobs} className="homeImg"></img>
            <h2 className="stationPages">Jacob's Ladder Experiment</h2>
        </Link>
        <Link to="/static-electricity" relative="path" className="linkPage">
            <img src={homeStatic} className="homeImg"></img>
            <h2 className="stationPages">Static Electricity</h2>
        </Link>
        <Link to="/vandegraaff" relative="path" className="linkPage">
            <img src={homeGraaff} className="homeImg"></img>
            <h2 className="stationPages">Van de Graaff Generator</h2>
        </Link>
        {/* <Link to="/manual-turbine" relative="path" className="linkPage">
            <img src={turbineImg} className="homeImg"></img>
            <h2 className="stationPages">Manual Turbine</h2>
        </Link> */}
        </div>
    </div>
  )
}
