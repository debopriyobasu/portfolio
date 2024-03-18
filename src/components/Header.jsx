import Navbar from "./Navbar";
import "./Header.css";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useState } from "react";

const Header = () => {
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
    <header id="header">
      <div className="container">
        <p id="logo">db.</p>
        <Navbar />
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
      </div>
    </header>
  );
};

export default Header;
