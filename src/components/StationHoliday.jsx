import { useState } from "react";
import AccessibilityButton from "./AccessibilityButton.jsx";

import snoopy from "/images/snoopy.gif?url";
import profSnoopy from "/images/profSnoopy.jpg?url";

import "../styles/snowflakes.css";

// Seasonal "Operation Snoopy" scavenger-hunt page. Ported from the pre-restructure
// architecture into the current component/style/asset layout. It is intentionally
// not wired into any route — wrap it in the app providers before making it viewable.

const TARGET_HASH =
  "4a88df5310e4662bf1f5715d6cdc40c1f4daa7345d14ee9ec00c546c56f45be3";

async function hashString(value) {
  const encoder = new TextEncoder();
  const data = encoder.encode(value);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function StationHoliday() {
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const codeString = formJson.codeInput.toString();

    if ((await hashString(codeString)) === TARGET_HASH) {
      window.alert(
        "Correct!\n\nWhat object sings without touch keeps its secrets below."
      );
    } else {
      window.alert("Incorrect");
    }
  };

  const btnStyle = {
    backgroundColor: "white",
    color: "black",
    fontSize: "20pt",
    borderRadius: "10px",
    border: "2px dashed black",
    padding: "10px",
    margin: "10px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const imgContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "100px",
  };

  return (
    <div>
      <div className="initial-snow">
        {Array.from({ length: 50 }, (_, i) => (
          <div className="snow" key={i}>
            {"❄"}
          </div>
        ))}
      </div>

      <div className="accs">
        <AccessibilityButton />
      </div>

      <div className="border">
        <h1 className="title">National Electronics Museum</h1>
      </div>
      <h1 style={{ border: "none" }} className="title">
        <strong>OPERATION: S. N. O. O. P. Y.</strong>
      </h1>

      <h2 style={{ textAlign: "center" }}>
        Find all six Snoopy ornaments and enter their codes here to get your clue
        to your gift. Characters should be added with no spaces, and all lower
        case.
      </h2>

      <div style={{ justifyContent: "center", display: "flex" }}>
        <form method="post" style={formStyle} onSubmit={handleSubmit}>
          <input
            style={{ fontSize: "20pt" }}
            value={code}
            type="text"
            name="codeInput"
            onChange={(e) => setCode(e.target.value)}
          />
          <span>
            <button style={btnStyle} type="reset" onClick={() => setCode("")}>
              Reset
            </button>
            <button style={btnStyle} type="submit">
              Submit
            </button>
          </span>
        </form>
      </div>
      <div style={imgContainerStyle}>
        <img src={snoopy} alt="Snoopy" />
        <img style={{ height: "220px" }} src={profSnoopy} alt="Professor Snoopy" />
      </div>
    </div>
  );
}
