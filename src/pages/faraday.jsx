import React from 'react'
import Slides from '../components/slides/slides'
import { artifact } from '../assets/database/artifact'
import MenuStation1 from '../components/menu/menuStation1'

function Faraday() {
  const data = artifact.filter(x => x.title === "Faraday's Experiment: Electricity and Magnetism")

  return (
    <div>
      <MenuStation1 />
      <h1 className="artifactTitle">Faraday's Experiment: Electricity and Magnetism</h1>
      <Slides artifact={data[0]} />
    </div>
  )
}

export default Faraday