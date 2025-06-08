import Slides from '../components/slides/slides'
import NavStation2 from '../components/nav/navStation2.jsx'
import Loop from '../components/loop'
import { artifact } from '../assets/database/artifact'
import StationHeader from '../components/StationHeader/StationHeader.jsx'

export default function Turbine() {

  const data = artifact.filter(x => x.title === "Manual Turbine")

  return (
    <div>
      <StationHeader nav={<NavStation2 />} artifact={artifact} />

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">Manual Turbine</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} />
    </div>
  )
}
