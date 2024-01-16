import React, { useState } from "react";
import Switch from "react-switch";
import { useTheme } from "../../context/ThemeContext";

const SwitchCustom = () => {
  const [isOn, setIsOn] = useState(false);
  const [theme, setTheme] = useTheme();
  const handleToggle = () => {
    setIsOn(!isOn);
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <Switch
        checked={isOn}
        onChange={handleToggle}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        height={20}
        width={48}
        className="react-switch"
      />
      <span>{isOn ? "On" : "Off"}</span>
    </div>
  );
};

export default SwitchCustom;
