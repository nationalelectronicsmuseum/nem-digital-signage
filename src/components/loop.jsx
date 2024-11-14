import React from 'react'

import loop from "../assets/sound/loop.wav"

function Loop() {
  return (
     <audio autoPlay loop src={loop} type="audio/wav"></audio>
  )
}

export default Loop