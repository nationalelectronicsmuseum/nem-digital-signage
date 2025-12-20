import { useSettings } from "../context/SettingsContext.jsx";

export default function Facts({ componentObject }) {
  const { settings } = useSettings();
  const aStyle = {
    fontSize: settings.fontSize.point,
    fontCode: settings.font.fontCode,
  };

  return (
    <ul>
      {componentObject.map((el, j) => (
        <li className="facts" key={j}>
          <span style={aStyle} className="facts-label">
            {el.label}
          </span>
          <span style={aStyle} className="facts-value">
            {el.value}
          </span>
        </li>
      ))}
    </ul>
  );
}
