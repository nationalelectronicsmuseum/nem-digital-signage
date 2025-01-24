import React, {useState} from 'react'
import MenuStation6 from '../components/menu/menuStation6'
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'
import Slides from '../components/slides/slides'
import { artifact } from '../assets/database/artifact'


function HAMRadio() {
  const [one, setOne] = useState("hide")
  const [two, setTwo] = useState("hide")
  const [three, setThree] = useState("hide")
  const [four, setFour] = useState("hide")
  const [five, setFive] = useState("hide")
  const [reveal, setReveal] = useState("hide")

  const data = artifact.filter(x => x.title === "HAM Radio")[0]

    const revealing = () => {
        if(reveal === "hide"){
            setReveal("showImageOne")
        } else {
            setReveal("hide")
        }
    }
    const hideBlock = () => {
      setReveal("hide")
    }

  return (
    <div>

      <div className="btnNav">
        <MenuStation6 />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">HAM Radio Club</h1>
        </div>
      </div>
      <Loop />

        {data.info.map((x,i) => {
          console.log(i, x.name)
          return (
            <div>
              <h2 onClick={() => revealing(i)}>{x.name}</h2>

              <div className={reveal}>
                <div className="backgroundImage" onClick={hideBlock}></div>
                  <div className="hamLeft">
                    <p>
                      {x.description}
                    </p>
                  </div>
                  <div className="hamRight">
                  </div>
              </div>
            </div>
        )
        })}

    
    </div>
  )
}

export default HAMRadio