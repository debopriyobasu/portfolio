import { CiLight, CiDark } from "react-icons/ci";
import { useState, useEffect } from "react";
import "./ThemeFab.css";

const ThemeFab = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(systemPrefersDark);
      document.documentElement.setAttribute(
        "data-theme",
        systemPrefersDark ? "dark" : "light"
      );
    }
  }, []);

  const toggleTheme = (): void => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Light/Dark Theme"
      type="button"
      className="theme-toggle pointer"
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
