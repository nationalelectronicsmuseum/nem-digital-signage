import React from 'react'
import { Link } from "react-router-dom";
import jumpingwiresImg from "../assets/img/jumpingwire.svg"
import jacobsladderImg from "../assets/img/jacobsladder.svg"
import staticImg from "../assets/img/static.svg"
import turbineImg from "../assets/img/turbine.svg"

export default function Station2() {
  return (
    <div>
      <div className="border">
                <h1 className="title">National Electronics Museum</h1>
        </div>

        <div className="homeLink">
        <Link to="/jumping-wires" relative="path">
            <img src={jumpingwiresImg} className="homeImg"></img>
        </Link>
        <Link to="/jacobs-ladder" relative="path">
            <img src={jacobsladderImg} className="homeImg"></img>
        </Link>
        <Link to="/static-electricity" relative="path">
            <img src={staticImg} className="homeImg"></img>
        </Link>
        <Link to="/manual-turbine" relative="path">
            <img src={turbineImg} className="homeImg"></img>
        </Link>
        </div>
    </div>
  )
}
