import React from "react";
import { Link } from "react-router-dom";
import marconiHome from "../assets/img/home-marconi.svg";
import audioHome from "../assets/img/home-audio.svg";
import broadcastImg from "../assets/img/ph-broadcast.svg";
import soundImg from "../assets/img/ph-sound.svg";

export default function Station6() {
  return (
    <div>
      <div className="border">
        <h1 className="title">National Electronics Museum</h1>
      </div>

      <div className="homeLink">
        <Link to="/audio" relative="path">
          <img src={audioHome} className="homeImg"></img>
        </Link>
        <Link to="/marconi" relative="path">
          <img src={marconiHome} className="homeImg"></img>
        </Link>
        <Link to="/first-broadcast" relative="path">
          <img src={broadcastImg} className="homeImg"></img>
        </Link>
        <Link to="/evolution-of-sound" relative="path">
          <img src={soundImg} className="homeImg"></img>
        </Link>
      </div>
    </div>
  );
}
