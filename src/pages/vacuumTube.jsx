import Slides from '../components/slides/slides'
import Menu from '../components/menu/menu'
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'
import artifact from '../assets/database/artifact'

function VacuumTube() {

  const data = artifact.filter((x) => x.title === "Vacuum Tube");

  return (
    <div>
      <div className="btnNav">
        <Menu />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">Vacuum Tube</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} />
    </div>
  )
}

export default VacuumTube