import "./NavBar.css";
import { Link } from "react-scroll";
import { CiChat1 } from "react-icons/ci";
import ThemeFab from "../ThemeFab/ThemeFab";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <p className="logo fw-bold pointer">Db.</p>

        <div className="desktopMenu">
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            className="desktopMenuListItem pointer"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            className="desktopMenuListItem pointer"
          >
            About
          </Link>
          {/* <Link className="desktopMenuListItem pointer">Work Experience</Link>
          <Link className="desktopMenuListItem pointer">Projects</Link> */}
        </div>
        <div className="nav-buttons">
          <Link
            className="desktopMenuBtn btn pointer"
            to="contact"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
          >
            <CiChat1 className="desktopMenuImg" />
            Contact Me
          </Link>
          <ThemeFab />
        </div>
        <div className="mob-items">
          <ThemeFab />
          <HiOutlineMenuAlt3
            className="mobMenu"
            onClick={() => setShowMenu((prev) => !prev)}
          />
        </div>

        {showMenu && (
          <div className="navMenu">
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="listItem pointer"
              onClick={() => setShowMenu(false)}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className="listItem pointer"
              onClick={() => setShowMenu(false)}
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className="listItem pointer"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </Link>
            {/* <Link className="desktopMenuListItem pointer">Work Experience</Link>
          <Link className="desktopMenuListItem pointer">Projects</Link> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
