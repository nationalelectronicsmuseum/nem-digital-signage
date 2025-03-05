import React from 'react'
import MenuStation5 from "../components/menu/menuStation5";
import Slides from "../components/slides/slides";
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'
import { artifact } from "../assets/database/artifact";

function Theremin() {
  const data = artifact.filter((x) => x.title === "Harrison Instruments 302 Theremin").pop();


  return (
    <div>
      <div className="btnNav">
        <MenuStation5 />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{data.title}</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data} />
    </div>
  )
}

export default Theremin