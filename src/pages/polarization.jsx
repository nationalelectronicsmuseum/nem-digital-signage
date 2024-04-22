import React from "react";
import Slides from "../components/slides/slides";
import MenuStation3 from "../components/menu/menuStation3";
import { artifact } from "../assets/database/artifact";

function Polarization() {
  const data = artifact.filter((x) => x.title === "Polarization Experiment");

  return (
    <>
      <MenuStation3 />
      <h1 className="artifactTitle">Polarization Experiment</h1>
      <Slides artifact={data[0]} />
    </>
  );
}

export default Polarization;
