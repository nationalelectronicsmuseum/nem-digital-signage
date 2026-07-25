import AccessibilityButton from "./AccessibilityButton.jsx";
import SectionCardCarousel from "./SectionCardCarousel";
import { useContent } from "../context/ContentProvider.jsx";
import { resolvePath } from "../utils/resolvePath.js";
import GrantLogo from "/images/millerGrant.webp?url";
import "../styles/Station.css";

export default function StationRenderer({ station }) {
  const content = useContent();
  return (
    <div className="station">
      <header className="station-header">
        <img
          className="station-grant-logo"
          src={GrantLogo}
          alt={resolvePath(content, "common.label.grantLogo") || "Miller Grant logo"}
        />
        <div className="controls">
          <AccessibilityButton />
        </div>

        <div className="border">
          <h1 className="title">National Electronics Museum</h1>
        </div>
      </header>
      <main className="station-body">
        <SectionCardCarousel station={station} />
      </main>
    </div>
  );
}
