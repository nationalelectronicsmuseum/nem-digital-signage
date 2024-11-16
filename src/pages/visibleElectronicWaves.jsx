import React from 'react'
import MenuStation3 from "../components/menu/menuStation3";
import Slides from "../components/slides/slides";
import { artifact } from "../assets/database/artifact";
import Loop from '../components/loop';
import Accessibility from '../components/accessibility/accessibility';

import image1 from "../assets/img/ewaves2.jpg"
import image2 from "../assets/img/ewaves3.webp"


function VisibleElectronicWaves() {
  const data = artifact.filter((x) => x.title === "Electromagnetic Radio Waves");


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
          <h1 className="artifactTitle">Electromagnetic Radio Waves</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} artifactImg1={image1} artifactImg2={image2} />
    </div>
  )
}

export default VisibleElectronicWaves