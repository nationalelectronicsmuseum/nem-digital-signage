import artifactImg from "../assets/img/marconi.svg";
import Slides from "../components/slides/slides.jsx";
import MenuStation6 from "../components/menu/menuStation6.jsx";
import { artifact } from "../assets/database/artifact";
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'

const Marconi = () => {
  const data = artifact.filter(x => x.title === "The Marconi Magnetic Detector")
  // const artifact = {
  //   title: "The Marconi Magnetic Detector",
  //   info: [
  //     {
  //       id: 1,
  //       text: "Inventor: Guglielmo Marconi"
  //     },
  //     {id: 2,
  //       text: "Year of Invention: 1896"
  //     },
  //     {
  //       id: 3,
  //       text: "Key Feature: Magnetic field sensor "},
  //     {
  //       id: 4,
  //       text: "Impact: Foundation for modern wireless tech"},
  //   ],
  //   description:
  //     "In the late 19th century, a young inventor named Guglielmo Marconi developed the Marconi Magnetic Detector, a device that could detect magnetic fields in radio waves. These are invisible signals that make wireless communication possible. These signals could be transmitted long distances without wires and received and became the starting point for wireless communication.",
  //   timeLine: [
  //     "History of Wireless communication ",
  //     "1.1 1890s - First Wireless Communication ",
  //     "1.2 1900s - First Radio Broadcast ",
  //     "1.3 1920s - First Commercial Radio ",
  //     "1.4 1930s - Radar technology, Television Broadcasting ",
  //     "1.5 1940s - Quality Radio Services ",
  //     "1.6 1950s - First Satellites, the Space program ",
  //     "1.7 1970s - Mobile networks, GPS ",
  //     "1.8 1980s - First-generation mobile networks ",
  //     "1.9 1990s - Second-generation mobile networks, Wi-Fi ",
  //     "1.10 2000s - Satellite internet, 3G Networks ",
  //     "1.11 2010s - LTE advanced, 5G network",
  //   ],
  //   impact:
  //     "The Marconi Magnetic Detector is a critical building block that started the journey to global connectivity. This invention changed the game of communication, shaping our modern world. This discovery laid the foundation for future wireless innovations like radios, televisions, the internet, smartphones and Wi-Fi.",
  //   directions: {
  //     title: "How it Works",
  //     steps: [
  //       {
  //         id: 1,
  //         step: "Listen on the telephone receiver.",
  //       },
  //       {
  //         id: 2,
  //         step: "Slowly turn the knob on the front clockwise.",
  //       },
  //       {
  //         id: 3,
  //         step: "The radio station is detected only when the wire band is moving. It stops when the wire band stops.",
  //       },
  //       {
  //         id: 4,
  //         step: "See how slowly you can turn the knob and still hear the radio.",
  //       },
  //       {
  //         id: 5,
  //         step: "Listen to the radio",
  //       },
  //     ],
  //   },
  //   how: [
  //     "Maggie moves the iron wire band through the radio frequency coil as you turn theknob. The detector functions by capturing radio waves, which are invisible signals traveling through the air. This device utilized a magnetic field to intercept these waves. When the radio waves interacted with the magnetic field within the detector, they caused fluctuations, creating tiny electrical currents. These currents were then amplified and converted into audible sounds, allowing people to hear the messages carried by the radio waves. ",

  //     "The Marconi Magnetic Detector operates on the principles of electromagnetic induction. It detects radio waves by utilizing a coherer, which is a component sensitive to electromagnetic waves. It operates by utilizing an antenna to receive radio waves, a coherer to detect and respond to these waves by altering its electrical resistance, and subsequent circuitry that interprets this change to generate a discernible output, usually an audible signal. This pioneering technology laid the foundation for wireless communication systems we use today.",
  //   ],
  // };

  return (
    <>
      <div className="btnNav">
        <MenuStation6 />
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
      <Slides artifact={data[0]} />
    </>
  );
};

export default Marconi;
