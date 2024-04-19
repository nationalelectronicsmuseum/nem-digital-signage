import React from 'react'
import Slides from '../components/slides/slides'
import { artifact } from '../assets/database/artifact'
import MenuStation1 from '../components/menu/menuStation1'

function HumanBattery() {
  const data = artifact.filter(x => x.title === "Do You Have The Power-to be an Electrical Conductor?")

  console.log(data[0].title)
  return (
    <div>
      <MenuStation1 />
      <h1 className="artifactTitle">Do You Have The Power-to be an Electrical Conductor?</h1>
      <Slides artifact={data[0]}/>
    </div>
  )
}

export default HumanBattery