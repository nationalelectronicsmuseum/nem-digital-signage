import Slides from "../components/slides/slides";
import NavStation7 from "../components/nav/navStation7";
import { artifact } from "../assets/database/artifact";
import StationHeader from "../components/StationHeader/StationHeader"
import Loop from '../components/loop'

function Polarization() {
  const data = artifact.filter((x) => x.title === "Polarization Experiment");

  return (
    <>
      <StationHeader nav={<NavStation7 />} artifact={artifact} />

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">Polarization Experiment</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} />
    </>
  );
}

export default Polarization;
