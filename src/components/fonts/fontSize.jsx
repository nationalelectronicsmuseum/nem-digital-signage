import React, { useState } from 'react'
import './fontSize.css'

function FontSize({text}) {
    const [fontPt, setFontPt] = useState(32)
    
    const increaseSize = () => {
        if(fontPt !== 40) {
            setFontPt(fontPt + 2)
        } else {
            
        }
        console.log(fontPt)
    }

    const decreaseSize = () => {
        if(fontPt === 28) {
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
        <div>
        <button className="btn" onClick={increaseSize}> + </button>
        <button className="btn" onClick={decreaseSize}> - </button>
        </div>

        <p style={font}>{text}</p>

    </div>
  )
}

export default FontSize
