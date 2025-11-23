import { Link } from "react-router-dom";
import "../styles/StationNav.css";

export default function StationNav({ station }) {
  return (
    <nav>
      <Link to={"/" + station.id}>
        Home
      </Link>
      {station.sections.map((sec) => (
        <Link
          key={sec.id}
          to={"/" + station.id + "/" + sec.id}
        >
          {sec.title}
        </Link>
      ))}
      <Link to={"/"}><div className="transparent">Index</div></Link>
    </nav>
  );
}
