import "./NavBar.css";
import { Link, animateScroll } from "react-scroll";
import { CiChat1 } from "react-icons/ci";
import ThemeFab from "../ThemeFab/ThemeFab";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

const NavBar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <p
          className="logo fw-bold pointer"
          onClick={() =>
            animateScroll.scrollToTop({ duration: 500, smooth: true })
          }
        >
          Db.
        </p>

        <div className="desktopMenu">
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            className="desktopMenuListItem pointer"
            href="#hero"
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
            href="#about"
          >
            About
          </Link>
        </div>
        <div className="nav-buttons">
          <Link
            className="desktopMenuBtn btn pointer"
            to="contact"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            href="#contact"
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
              href="#hero"
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
              href="#about"
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
              href="#contact"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className="listItem pointer"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
