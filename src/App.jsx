import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeStation from "./pages/homeStation";

import { SettingsProvider } from "./components/AccessibilitySettings/AccessibilitySettings.jsx";

import Admin from "../src/assets/admin/admin";

import VoltAndCurr from "./pages/voltAndCurr";
import HumanBattery from "./pages/humanBatt";
import Oersted from "./pages/oersted";
import Faraday from "./pages/faraday";
import JumpingWires from "./pages/jumpingWires";
import JacobsLadder from "./pages/jacobsLadder";
import StaticElectricity from "./pages/staticElectricity";
import Turbine from "./pages/turbine";
import Theremin from "./pages/theremin";
import VisibleElectronicWaves from "./pages/visibleElectronicWaves";
import Polarization from "./pages/polarization";
import EvolutionRecordedSound from "./pages/evolutionRecordedSound";
import MicrowaveTurntable from "./pages/microwaveTurntable";
import Audio from "./pages/audio";
import Marconi from "./pages/marconi";
import FirstBroadcast from "./pages/firstBroadcast";
import EvolutionSound from "./pages/evolutionSound";
import Telegraph from "./pages/telegraph";
import Electromagnetic from "./pages/electromagnetic.jsx"
import VacuumTube from "./pages/vacuumTube";
import Station13Section1 from "./pages/station13section1.jsx";
import Station13Section2 from "./pages/station13section2.jsx";
import Station13Section3 from "./pages/station13section3.jsx";
import Station13Section4 from "./pages/station13section4.jsx";
import Station14Section1 from "./pages/station14section1.jsx";
import Station14Section2 from "./pages/station14section2.jsx";
import Station14Section3 from "./pages/station14section3.jsx";
import Station14Section4 from "./pages/station14section4.jsx";
import Station15Section1 from "./pages/station15section1.jsx";
import Station15Section2 from "./pages/station15section2.jsx";
import Station15Section3 from "./pages/station15section3.jsx";
import Station15Section4 from "./pages/station15section4.jsx";
import Graaff from "./pages/graaff.jsx";

import Station1 from "./pages/station1";
import Station2 from "./pages/station2";
import Station3 from "./pages/station3";
import Station4 from "./pages/station4";
import Station5 from "./pages/station5";
import Station6 from "./pages/station6";
import Station7 from "./pages/station7";
import Station8 from "./pages/station8";
import Station9 from "./pages/station9";
import Station10 from "./pages/station10";
import Station11 from "./pages/station11";
import Station12 from "./pages/station12";
import Station13 from "./pages/station13";
import Station14 from "./pages/station14";
import Station15 from "./pages/station15";

import HAMRadio from "./pages/hamRadio.jsx";
import InProgress from "./pages/inProgress";
import { ImageOverlayProvider } from "./components/OverlayImage/OverlayImageContext.jsx";

function App() {
  return (
    <SettingsProvider>
      <ImageOverlayProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomeStation />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/in-progress" element={<InProgress />} />

            <Route path="/station1" element={<Station1 />} />
            <Route path="/voltage-and-current" element={<VoltAndCurr />} />
            <Route path="/human-battery" element={<HumanBattery />} />
            <Route path="/oersted" element={<Oersted />} />
            <Route path="/faraday" element={<Faraday />} />

            <Route path="/station2" element={<Station2 />} />
            <Route path="/jumping-wires" element={<JumpingWires />} />
            <Route path="/jacobs-ladder" element={<JacobsLadder />} />
            <Route path="/static-electricity" element={<StaticElectricity />} />
            <Route path="/manual-turbine" element={<Turbine />} />
            <Route path="/vandegraaff" element={<Graaff />} />

            <Route path="/station3" element={<Station3 />} />
            <Route path="/theremin" element={<Theremin />} />
            <Route path="/visible-electromagnetic-waves" element={<VisibleElectronicWaves />} />
            <Route path="/polarization" element={<Polarization />} />
            <Route path="/evolution-recorded-sound" element={<EvolutionRecordedSound />} />

            <Route path="/station4" element={<Station4 />} />
            <Route path="/microwave-turntable" element={<MicrowaveTurntable />} />

            <Route path="/station5" element={<Station5 />} />

            <Route path="/station6" element={<Station6 />} />
            <Route path="/marconi" element={<Marconi />} />
            <Route path="/audio-translator" element={<Audio />} />
            <Route path="/first-broadcast" element={<FirstBroadcast />} />
            <Route path="/evolution-of-sound" element={<EvolutionSound />} />

            <Route path="/station7" element={<Station7 />} />
            <Route path="/telegraph" element={<Telegraph />} />
            <Route path="/electromagnetic" element={<Electromagnetic />} />

            <Route path="/station8" element={<Station8 />} />
            <Route path="/vacuum-tubes" element={<VacuumTube />} />

            <Route path="/station9" element={<Station9 />} />
            <Route path="/hamradio" element={<HAMRadio />} />

            <Route path="/station10" element={<Station10 />} />

            <Route path="/station11" element={<Station11 />} />

            <Route path="/station12" element={<Station12 />} />

            <Route path="/station13" element={<Station13 />} />
            <Route path="/station13section1" element={<Station13Section1 />} />
            <Route path="/station13section2" element={<Station13Section2 />} />
            <Route path="/station13section3" element={<Station13Section3 />} />
            <Route path="/station13section4" element={<Station13Section4 />} />

            <Route path="/station14" element={<Station14 />} />
            <Route path="/station14section1" element={<Station14Section1 />} />
            <Route path="/station14section2" element={<Station14Section2 />} />
            <Route path="/station14section3" element={<Station14Section3 />} />
            <Route path="/station14section4" element={<Station14Section4 />} />

            <Route path="/station15" element={<Station15 />} />
            <Route path="/station15section1" element={<Station15Section1 />} />
            <Route path="/station15section2" element={<Station15Section2 />} />
            <Route path="/station15section3" element={<Station15Section3 />} />
            <Route path="/station15section4" element={<Station15Section4 />} />

            <Route path="/audio" element={<Audio />} />
            <Route path="/marconi" element={<Marconi />} />
            <Route path="/telegraph" element={<Telegraph />} />
          </Routes>
        </Router>
      </ImageOverlayProvider>
    </SettingsProvider>
  );
}

export default App;
