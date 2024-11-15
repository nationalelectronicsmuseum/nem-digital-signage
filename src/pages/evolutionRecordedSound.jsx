import React from 'react'
import MenuStation3 from '../components/menu/menuStation3'
import Loop from '../components/loop'
import Accessibility from '../components/accessibility/accessibility'
import SlidesAudio from '../components/slides/slidesAudio'


function EvolutionRecordedSound() {
//   const data = artifact.filter(x => x.title === "Faraday's Experiment: Electricity and Magnetism")

  return (
    <div>
      <div className="btnNav">
        <MenuStation3 />
        <div className="accs">
        </div>
      </div>

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">The Evolution of Recorded Sound</h1>
        </div>
      </div>
      <Loop />
      <SlidesAudio/>
    </div>
  )
}

export default EvolutionRecordedSound