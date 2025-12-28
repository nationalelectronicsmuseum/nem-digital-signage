import "../styles/SettingGroup.css";

export const toggleOptions = {
  toggle: [
    {
      name: "On",
      value: true,
    },
    {
      name: "Off",
      value: false,
    },
  ],
};

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
            onClick={() => onChange(opt)}
          >
            {opt.name}
          </button>
        ))}
      </div>
    </div>
  );
}
