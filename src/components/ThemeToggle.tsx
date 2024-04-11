import React from "react";
import { useTheme } from "../styles/ThemeToggle";
import { IoSunnyOutline } from "react-icons/io5";

const ThemeToggle: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <>
      <IoSunnyOutline
        onClick={toggleTheme}
        size={30}
        style={{ cursor: "pointer", marginLeft: "10px" }}
      />
    </>
  );
};

export default ThemeToggle;
