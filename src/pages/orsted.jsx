import React from 'react'
import Accessibility from "../components/accessibility/accessibility.jsx";
import { artifact } from '../assets/database/artifact'
import MenuStation1 from '../components/menu/menuStation1'
import Slides from '../components/slides/slides'
import Loop from '../components/loop.jsx';

function Orsted() {
  const data = artifact.filter(x => x.title === "Orsted's Experiment")

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
          <h1 className="artifactTitle">Orsted's Experiment</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} />
    </div>
  )
}

export default Orsted