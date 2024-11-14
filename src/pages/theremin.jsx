import React from 'react'
import MenuStation3 from "../components/menu/menuStation3";
import Slides from "../components/slides/slides";
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'
import { artifact } from "../assets/database/artifact";

function Theremin() {
  const data = artifact.filter((x) => x.title === "Theramin");


  return (
    <div>
      <div className="btnNav">
        <MenuStation3 />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">Theramin</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} />
    </div>
  )
}

export default Theremin