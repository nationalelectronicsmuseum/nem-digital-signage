import Slides from '../components/slides/slides'
import artifact from '../assets/database/artifact'
import NavStation6 from '../components/nav/navStation6.jsx'
import Loop from '../components/loop'
import StationHeader from '../components/StationHeader/StationHeader.jsx'

function EvolutionSound() {
  const data = artifact.filter(x => x.title === "The Evolution of Sound")
  return (
    <div>
      <StationHeader nav={<NavStation6 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">The Evolution of Sound</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} />
    </div>
  )
}

export default EvolutionSound