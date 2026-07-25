import "../styles/SettingGroup.css";
import { toggleOptions } from "../data/toggleOptions.js";

export default function SettingGroup({ label, options, value, onChange, getLabel }) {
  if (!options) {
    options = toggleOptions.toggle;
  }
  // getLabel translates the option's display text; opt.name stays the stable
  // identity used for selection matching and persisted settings.
  const display = getLabel || ((opt) => opt.name);
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
            onClick={() => onChange(opt)}
          >
            {display(opt)}
          </button>
        ))}
      </div>
    </div>
  );
}
