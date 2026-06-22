import stationsData from "./data/stations.json";
import { Link } from "react-router-dom";
import "./styles/index.css";

export default function Index() {
  return (
    <div className="index-wrapper">
      <div>
        <h1 className="title">National Electronics Museum</h1>
      </div>
      <div className="station-list-wrapper">
        <ul className="station-list">
          {stationsData.stations.map((station) => (
            <li key={station.id} className="index-station-link">
              <Link to={`/${station.id}`} relative="path">
                <button className="station-button">{station.name}</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
