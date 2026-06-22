import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import "./styles/main.css";
import "./assets/fonts/OpenDyslexicMono.css";
import "./assets/fonts/Orbitron.css";

const appErrorFallback = (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      gap: "24px",
      textAlign: "center",
    }}
  >
    <h1 className="title">National Electronics Museum</h1>
    <p style={{ fontSize: "24px" }}>Something went wrong.</p>
    <button
      style={{
        fontSize: "22px",
        padding: "12px 28px",
        borderRadius: "10px",
        cursor: "pointer",
      }}
      onClick={() => window.location.reload()}
    >
      Reload
    </button>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback={appErrorFallback}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
    <div id="modal-root"></div>
    <div id="modal-image-root"></div>
    <div id="modal-vocabulary-root"></div>
  </React.StrictMode>
);
