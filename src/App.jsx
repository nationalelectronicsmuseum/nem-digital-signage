import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import Home from "./pages";
import Audio from "./pages/audio";
import Marconi from "./pages/marconi";
import Telegraph from "./pages/telegraph";
import "./App.css";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/marconi" element={<Marconi />} />
        <Route path="/telegraph" element={<Telegraph />} />
      </Routes>
    </Router>
    
  );
}

export default App;
