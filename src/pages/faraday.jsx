import React from 'react'
import Slides from '../components/slides/slides'
import { artifact } from '../assets/database/artifact'
import MenuStation1 from '../components/menu/menuStation1'
import Loop from '../components/loop'
import Accessibility from '../components/accessibility/accessibility'


function Faraday() {
  const data = artifact.filter(x => x.title === "Faraday's Experiment: Electricity and Magnetism")

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
          <h1 className="artifactTitle">Faraday's Experiment: Electricity and Magnetism</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} />
    </div>
  )
}

export default Faraday