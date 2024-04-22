import React from 'react'
import Slides from '../components/slides/slides'
import MenuStation2 from '../components/menu/menuStation2'
import { artifact } from '../assets/database/artifact'

export default function JacobsLadder() {
  const data = artifact.filter(x => x.title === "Jacob's Ladder Experiment:  Demonstrating Electrical Principles")
  return (
    <div>
      <MenuStation2 />
      <h1 className="artifactTitle">Jacob's Ladder</h1>
      <Slides artifact={data[0]}/>
    </div>
  )
}
