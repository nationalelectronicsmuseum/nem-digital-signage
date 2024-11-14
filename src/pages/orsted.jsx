import React from 'react'
import { artifact } from '../assets/database/artifact'
import MenuStation1 from '../components/menu/menuStation1'
import Slides from '../components/slides/slides'

function Orsted() {
  const data = artifact.filter(x => x.title === "Orsted's Experiment")

  return (
    <div>
      <MenuStation1 />
      <h1 className="artifactTitle">Orsted's Experiment</h1>
      <Slides artifact={data[0]} />
    </div>
  )
}

export default Orsted