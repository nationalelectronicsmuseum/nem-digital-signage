import AccessibilityButton from "./AccessibilityButton.jsx";
import SectionCardCarousel from "./SectionCardCarousel";
import GrantLogo from "/images/millerGrant.png?url";
import "../styles/Station.css";

export default function StationRenderer({ station }) {
  return (
    <div className="station">
      <header className="station-header">
        <img
          className="station-grant-logo"
          src={GrantLogo}
          alt="Miller Grant logo"
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
