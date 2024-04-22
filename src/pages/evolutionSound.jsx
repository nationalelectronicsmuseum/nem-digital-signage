import React from 'react'
// import Slides from '../components/slides/slides'
import { artifact } from '../assets/database/artifact'
import MenuStation6 from '../components/menu/menuStation6'

function EvolutionSound() {
  const data = artifact.filter(x => x.title === "First Broadcast")
  return (
    <div>
      <MenuStation6 />
      <h1 className="artifactTitle">The Evolution of Sound</h1>
      {/* <Slides artifact={data[0]}/> */}
    </div>
  )
}

export default EvolutionSound