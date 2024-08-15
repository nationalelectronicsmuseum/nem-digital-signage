import React from 'react'
import { Link } from "react-router-dom";

export default function Station8() {

  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }
  
  return (
    <div>
      <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6>Hub Station</h6>
      </Link>
    </div>
  )
}
