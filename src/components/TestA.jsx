import React, { useContext } from "react";
import { Context } from "../assets/accessibilityContext";

export default function TestA() {
  const [context, setContext] = useContext(Context);
  return (
    <div>
      ComponentA:
      <button onClick={() => setContext("New Value")}>
        Change Context Value
      </button>
    </div>
  );
}
