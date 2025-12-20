import { useSettings } from "../context/SettingsContext.jsx";

export default function Steps({ componentObject }) {
  const { settings } = useSettings();
  const aStyle = {
    fontSize: settings.fontSize.point,
    fontCode: settings.font.fontCode,
  };

  return (
    <ul>
      {componentObject.map((el, j) => (
        <li className="steps" key={j}>
          <span style={aStyle} className="step">
            {el}
          </span>
        </li>
      ))}
    </ul>
  );
}
