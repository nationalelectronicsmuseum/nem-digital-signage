import React from 'react'
import Slides from '../components/slides/slides'
import { artifact } from '../assets/database/artifact'
import MenuStation1 from '../components/menu/menuStation1'
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'

import image1 from "../assets/img/humanBatt1.png"
import image2 from "../assets/img/humanBatt2.gif"


function HumanBattery() {
  const data = artifact.filter(x => x.title === "Human Battery")

  console.log(data[0].title)
  return (
    <div>
      <div className="btnNav">
        <MenuStation1 />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">Do you have the power to be an electrical conductor?</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} artifactImg1={image2} artifactImg2={image1}/>
    </div>
  )
}

export default HumanBattery