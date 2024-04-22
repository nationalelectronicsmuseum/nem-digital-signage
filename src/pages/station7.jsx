import React from 'react'
import Telegraph from './telegraph'
import Slides from '../components/slides/slides'
import { artifact } from '../assets/database/artifact'

export default function Station7() {
  const data = artifact.filter(x => x.title === "Telegraph Machine - Connecting the World")
  return (
    <div>
      <Telegraph />
      <Slides artifact={data[0]}/>
    </div>
  )
}
