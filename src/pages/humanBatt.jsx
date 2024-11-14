import React from 'react'
import Slides from '../components/slides/slides'
import { artifact } from '../assets/database/artifact'
import MenuStation1 from '../components/menu/menuStation1'
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'


function HumanBattery() {
  const data = artifact.filter(x => x.title === "Do You Have The Power-to be an Electrical Conductor?")

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
          <h1 className="artifactTitle">Do You Have The Power-to be an Electrical Conductor?</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} />
    </div>
  )
}

export default HumanBattery