import React from 'react'
import Slides from '../components/slides/slides'
import MenuStation2 from '../components/menu/menuStation2'
import { artifact } from '../assets/database/artifact'
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'

import image1 from "../assets/img/graaff2.jpg"
import image2 from "../assets/img/graaff3.png"
import image3 from "../assets/img/graaff4.png"
import image4 from "../assets/img/graaff5.jpg"

function Graaff() {
  const data = artifact.filter(x => x.title === "The Van de Graaff Generator: Harnessing the Power of Static Electricity")
  return (
    <div>
       <div className="btnNav">
        <MenuStation2 />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">Van de Graff Generator</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} artifactImg1={image1} artifactImg2={image2} artifactImg3={image3} artifactImg4={image4}/>
    </div>
  )
}

export default Graaff