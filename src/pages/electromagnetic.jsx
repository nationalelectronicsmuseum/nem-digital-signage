import React from "react";
import SlidesElectromagnetic from "../components/slides/slidesElectromagnetic.jsx"
import MenuStation7 from "../components/menu/menuStation7";
import { artifact } from "../assets/database/artifact";
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'

function Polarization() {
  const data = artifact.filter((x) => x.title === "Introduction to Electromagnetic Waves");

  return (
    <>
      <div className="btnNav">
        <MenuStation7 />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>

      <div className="emhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle" >Introduction to Electromagnetic Waves</h1>
        </div>
      </div>
      <Loop />
      <SlidesElectromagnetic artifact={data[0]} />
    </>
  );
}

export default Polarization;
