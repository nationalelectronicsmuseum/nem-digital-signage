import React from 'react'
import { Link } from "react-router-dom";
import VoltImg from "../assets/img/volt.svg"
import HumanBattImg from "../assets/img/human-batt.svg"
import FaradayImg from "../assets/img/faraday.svg"
import OrstedImg from "../assets/img/orsted.svg"

function Station1() {
  return (
    <div>
        <div className="border">
                <h1 className="title">National Electronics Museum</h1>
        </div>

        <div className="homeLink">
        <Link to="/voltage-and-current" relative="path">
            <img src={VoltImg} className="homeImg"></img>
        </Link>
        <Link to="/human-battery" relative="path">
            <img src={HumanBattImg} className="homeImg"></img>
        </Link>
        <Link to="/in-progress" relative="path">
            <img src={OrstedImg} className="homeImg"></img>
        </Link>
        <Link to="/faraday" relative="path">
            <img src={FaradayImg} className="homeImg"></img>
        </Link>
        </div>
    </div>
  )
}

export default Station1