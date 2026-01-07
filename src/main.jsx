import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.css";
import "./assets/fonts/OpenDyslexicMono.css";
import loop from "/audio/loop.wav?url";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <audio autoPlay loop src={loop} type="audio/wav"></audio>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <div id="modal-root"></div>
    <div id="modal-image-root"></div>
  </React.StrictMode>
);
