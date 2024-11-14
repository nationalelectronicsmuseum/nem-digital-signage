import React from 'react'
import MenuStation3 from "../components/menu/menuStation3";
import Slides from "../components/slides/slides";
import { artifact } from "../assets/database/artifact";
import Loop from '../components/loop';
import Accessibility from '../components/accessibility/accessibility';

function VisibleElectronicWaves() {
  const data = artifact.filter((x) => x.title === "Visible Electromagnetic Waves");


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
          <h1 className="artifactTitle">Visible Electromagnetic Waves</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} />
    </div>
  )
}

export default VisibleElectronicWaves