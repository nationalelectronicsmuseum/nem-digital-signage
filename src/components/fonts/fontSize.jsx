import React, { useState } from 'react'
import './fontSize.css'

function FontSize() {
    const [fontPt, setFontPt] = useState(16)
    
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

    const font = {
        fontSize :fontPt
    }

  return (
    <div>
        <h1>Hello</h1>
        <div>
        <button className="btn" onClick={increaseSize}> + </button>
        <button className="btn" onClick={decreaseSize}> - </button>
        </div>
    </div>
  )
}

export default FontSize
