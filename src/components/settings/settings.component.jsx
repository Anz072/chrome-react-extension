import "./settings.styles.css";

const Settings = () => {
  return (
    <div className="settings-main">
      <div className="settings-table">
        <h4>Summary Length</h4>
        <label>
          <input type="radio" checked="checked" value="Short" name="length" />
          Short
        </label>
        <label>
          <input type="radio" value="Medium" name="length" /> Medium
        </label>
        <label>
          <input type="radio" value="Long" name="length" /> Long
        </label>
      </div>
      <div className="settings-table">
        <h4>Generic Extension Appearance</h4>
        <label for="vehicle1">
        <input type="radio" checked="checked" id="vehicle1" name="mode" value="Dark" />
            Dark Mode
            </label>
        <label for="vehicle2">
        <input type="radio" id="vehicle2" name="mode" value="Light" />
            Light Mode
            </label>
      </div>
    </div>
  );
};

export default Settings;
