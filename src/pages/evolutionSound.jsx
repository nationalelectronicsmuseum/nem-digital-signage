import React from 'react'
import Slides from '../components/slides/slides'
import { artifact } from '../assets/database/artifact'
import MenuStation6 from '../components/menu/menuStation6'
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'

function EvolutionSound() {
  const data = artifact.filter(x => x.title === "The Evolution of Sound")
  return (
    <div>
      <div className="btnNav">
        <MenuStation6 />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">The Evolution of Sound</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} />
    
    </div>
  )
}

export default EvolutionSound