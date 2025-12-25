import { Link } from "react-router-dom";
import { loadContent } from "../utils/loadContent";
import { useSettings } from "../context/SettingsContext.jsx";
import { resolvePath } from "../utils/resolvePath.js";
import "../styles/StationNav.css";

export default function StationNav({ station }) {
  const { settings } = useSettings();
  const languageCode = settings.language.languageCode;
  const content = loadContent(languageCode);

  return (
    <nav>
      <Link to={"/" + station.id}>Home</Link>
      {station.sections.map((sec) => {
        let title = resolvePath(content, "common.sectionTitle." + sec.id);
        return (
          <Link key={sec.id} to={"/" + station.id + "/" + sec.id}>
            {title}
          </Link>
        );
      })}
      <Link to={"/"}>
        <div className="transparent">Index</div>
      </Link>
    </nav>
  );
}
