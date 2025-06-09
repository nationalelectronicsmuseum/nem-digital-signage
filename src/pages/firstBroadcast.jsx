import NavStation6 from '../components/nav/navStation6.jsx'
import Loop from '../components/loop'
import Slides from '../components/slides/slides'
import artifact from '../assets/database/artifact'
import StationHeader from '../components/StationHeader/StationHeader.jsx'


function FirstBroadcast() {
  const data = artifact.filter(x => x.title === "First Broadcast")

  return (
    <div>
      <StationHeader nav={<NavStation6 />} artifact={artifact} />

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">First Broadcast</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} />
    </div>
  )
}

export default FirstBroadcast