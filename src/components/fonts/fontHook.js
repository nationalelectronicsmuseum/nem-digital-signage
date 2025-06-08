import { useState } from 'react'

export function fontHook() {
    const [fontPt, setFontPt] = useState(16)
    
    const increaseSize = () => {
        if(fontPt !== 20) {
            setFontPt(fontPt + 2)
        }
    }

    const decreaseSize = () => {
        if(fontPt === 10) {
            return ''
        } else {
            setFontPt(fontPt - 2)
        }
    }

    const font = {
        fontSize :fontPt
    }
}