import React from 'react'
import Slides from '../components/slides/slides'
import MenuStation2 from '../components/menu/menuStation2'
import { artifact } from '../assets/database/artifact'
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'

function JumpingWires() {
  const data = artifact.filter(x => x.title === "Jumping Wires")
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
          <h1 className="artifactTitle">Jumping Wires</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} />
    </div>
  )
}

export default JumpingWires