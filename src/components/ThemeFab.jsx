import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useState } from "react";
import "../styles/ThemeFab.css";
const ThemeFab = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute("data-theme", "light");
      setIsDark(false);
    } else {
      root.setAttribute("data-theme", "dark");
      setIsDark(true);
    }
  };
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Light/Dark Theme"
      type="button"
    >
      {isDark ? (
        <CiLight className="theme-icon" />
      ) : (
        <CiDark className="theme-icon" />
      )}
    </button>
  );
};

export default ThemeFab;
