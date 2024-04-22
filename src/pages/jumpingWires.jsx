import React from 'react'
import Slides from '../components/slides/slides'
import MenuStation2 from '../components/menu/menuStation2'
import { artifact } from '../assets/database/artifact'

function JumpingWires() {
  const data = artifact.filter(x => x.title === "Jumping Wires")
  return (
    <div>
      <MenuStation2 />
      <h1 className="artifactTitle">Jumping Wires</h1>
      <Slides artifact={data[0]}/>
    </div>
  )
}

export default JumpingWires