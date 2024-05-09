import React from 'react'
import Telegraph from './telegraph'
import Slides from '../components/slides/slides'
import { artifact } from '../assets/database/artifact'
import Menu from '../components/menu/menu'

export default function Station7() {
  const data = artifact.filter(x => x.title === "Telegraph Machine - Connecting the World")
  return (
    <div>
      <Menu />
      <Telegraph />
      <Slides artifact={data[0]}/>
    </div>
  )
}
