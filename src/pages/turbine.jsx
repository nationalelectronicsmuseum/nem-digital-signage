import React from 'react'
import Slides from '../components/slides/slides'
import MenuStation2 from '../components/menu/menuStation2'

export default function Turbine() {
  return (
    <div>
      <MenuStation2 />
      <h1 className="artifactTitle">Manual Turbine</h1>
      <Slides />
    </div>
  )
}
