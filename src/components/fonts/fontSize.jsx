import React, { useState } from 'react'
import './fontSize.css'
import Speech from '../speech/speech'

function FontSize({text}) {
    const [fontPt, setFontPt] = useState(32)
    
    const fontLrg = () => {
        setFontPt(48)
    }

    const fontMed = () => {
        setFontPt(40)
    }

    const fontDef = () => {
        setFontPt(32)
    }

    const font = {
        fontSize :fontPt,
        lineHeight : 2
    }

    

  return (
    <div>
        <button className="btn def" onClick={fontDef}>A</button>
        <button className="btn med" onClick={fontMed}>A</button>
        <button className="btn lrg" onClick={fontLrg}>A</button>

        <Speech text={text}/>

        <p style={font}>{text}</p>

    </div>
  )
}

export default FontSize
