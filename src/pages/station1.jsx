import React from 'react'
import { Link } from "react-router-dom";

function Station1() {
  return (
    <div>
        <div className="border">
                <h1 className="title">National Electronics Museum</h1>
        </div>

        <Link to="/voltage-and-current" relative="path">
            Voltage and Current
        </Link>
        <Link to="/human-battery" relative="path">
            Do you have the Power?
        </Link>
        <Link to="/orsted" relative="path">
            Orsted Experiment
        </Link>
        <Link to="/faraday" relative="path">
            Faraday Experiment
        </Link>
    </div>
  )
}

export default Station1