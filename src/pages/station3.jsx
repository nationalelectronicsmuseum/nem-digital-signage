import React from 'react'
import { Link } from "react-router-dom";
import polarizationImg from "../assets/img/polarization.svg"
import theraminImg from "../assets/img/ph-theramin.svg"
import electromagneticImg from "../assets/img/ph-electromagnetic.svg"

export default function Station3() {
  return (
    <div>
      <div className="border">
        <h1 className="title">National Electronics Museum</h1>
      </div>

      <div className="homeLink">
        <Link to="/theremin" relative="path">
            <img src={theraminImg} className="homeImg"></img>
        </Link>
        <Link to="/visible-electromagnetic-waves" relative="path">
            <img src={electromagneticImg} className="homeImg"></img>
        </Link>
        <Link to="/polarization" relative="path">
            <img src={polarizationImg} className="homeImg"></img>
        </Link>
      </div>

    </div>
  )
}
