import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.css";
import "./assets/fonts/OpenDyslexicMono.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <div id="modal-root"></div>
    <div id="modal-image-root"></div>
    <div id="modal-vocabulary-root"></div>
  </React.StrictMode>
);
