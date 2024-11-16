import artifactImg from "../assets/img/marconi.svg";
import Slides from "../components/slides/slides.jsx";
import MenuStation3 from "../components/menu/menuStation3.jsx";
import { artifact } from "../assets/database/artifact";
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'

import image1 from "../assets/img/marconi2.jpg"
import image2 from "../assets/img/marconi3.jpg"

const Marconi = () => {
  const data = artifact.filter(x => x.title === "The Marconi Magnetic Detector")
  

  return (
    <>
      <div className="btnNav">
        <MenuStation3 />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">The Marconi Magnetic Detector</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} artifactImg1={image1}/>
    </>
  );
};

export default Marconi;
