import React from 'react'
import Slides from '../components/slides/slides'
import MenuStation2 from '../components/menu/menuStation2'
import { artifact } from '../assets/database/artifact'
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'

export default function JacobsLadder() {
  const data = artifact.filter(x => x.title === "Jacob's Ladder Experiment:  Demonstrating Electrical Principles")
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
          <h1 className="artifactTitle">Jacob's Ladder Experiment:  Demonstrating Electrical Principles</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} />
    </div>
  )
}
