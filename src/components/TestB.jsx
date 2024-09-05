import React, { useContext } from "react";
import {Context} from "../assets/accessibilityContext"

export default function TestB() {
  const [context, setContext] = useContext(Context);
  return <div>ComponentB: {context}</div>;
}