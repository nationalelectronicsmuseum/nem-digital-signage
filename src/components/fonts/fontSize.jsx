import React, { useState } from 'react'
import './fontSize.css'
import Speech from '../speech/speech'

function FontSize({text}) {
    const [fontPt, setFontPt] = useState(32)
    const [state, setState] = useState("hide")
    const [selected, setSelected] = useState("qdbp notselected")
    
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

    const fontSet = () => {
        if(state === "hide"){
            setState("show")
            setSelected("qdbp selected")
        } else {
            setState("hide")
            setSelected("qdbp notselected")
        }
    }

  return (
    <div>
        <button onClick={fontSet} className={selected}>Accessibility</button>
        <div className={state}>
        <button className="btn def" onClick={fontDef}>A</button>
        <button className="btn med" onClick={fontMed}>A</button>
        <button className="btn lrg" onClick={fontLrg}>A</button>

        <Speech text={text}/>
        </div>

        <p style={font}>{text}</p>

    </div>
  )
}

export default FontSize
