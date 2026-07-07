import "../styles/SettingGroup.css";
import { toggleOptions } from "../data/toggleOptions.js";

export default function SettingGroup({ label, options, value, onChange }) {
  if (!options) {
    options = toggleOptions.toggle;
  }
  return (
    <div className="setting-group-container">
      <h3 className="setting-group-title">{label}</h3>

      <div className="setting-group-option-group">
        {options.map((opt) => (
          <button
            className={
              opt.name === value.name
                ? "setting-group-option setting-group-option-selected"
                : "setting-group-option"
            }
            key={label + opt.name}
            aria-pressed={opt.name === value.name}
            onClick={() => onChange(opt)}
          >
            {opt.name}
          </button>
        ))}
      </div>
    </div>
  );
}
