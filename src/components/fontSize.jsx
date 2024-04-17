import React, { useState } from 'react'
import './fontSize.css'

export default function FontSize({font}) {
    const [fontPt, setFontPt] = useState(font)
    
    const increaseSize = () => {
        if(fontPt !== 20) {
            setFontPt(fontPt + 2)
        } else {
            
        }
        console.log(fontPt)
    }

    const decreaseSize = () => {
        if(fontPt === 10) {
            return ''
        } else {
            setFontPt(fontPt - 2)
        }
        console.log(fontPt)
    }


  return (
    <div>
        <h1>{fontPt}</h1>
        <div>
        <button className="btn" onClick={increaseSize}> + </button>
        <button className="btn" onClick={decreaseSize}> - </button>
        </div>
    </div>
  )
}
