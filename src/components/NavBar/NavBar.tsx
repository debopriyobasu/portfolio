import "./NavBar.css";
import { Link } from "react-scroll";
import { HiOutlineHome, HiOutlineUser, HiOutlineChatAlt2 } from "react-icons/hi";
import ThemeFab from "../ThemeFab/ThemeFab";

const NavBar: React.FC = () => {
  return (
    <>
      {/* Top Navigation for Logo, Theme Toggle, and Desktop Menu */}
      <nav className="navbar">
        <div className="container">
          <p
            className="logo fw-bold pointer"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
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
              offset={0}
              duration={500}
              containerId="scrollable-container"
              className="desktopMenuListItem"
              href="#hero"
              aria-label="Go to Home"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              containerId="scrollable-container"
              className="desktopMenuListItem"
              href="#about"
              aria-label="Go to About"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              containerId="scrollable-container"
              className="desktopMenuListItem"
              href="#contact"
              aria-label="Go to Contact"
            >
              Contact
            </Link>
          </div>
          <ThemeFab />
        </div>
      </nav>

      {/* Bottom Navigation for Mobile */}
      <nav className="bottom-nav">
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          hashSpy={true}
          smooth={true}
          offset={-64}
          duration={500}
          containerId="scrollable-container"
          className="bottom-nav-item"
          href="#hero"
          aria-label="Go to Home"
        >
          <HiOutlineHome className="bottom-nav-icon" />
          <span>Home</span>
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          hashSpy={true}
          smooth={true}
          offset={-64}
          duration={500}
          containerId="scrollable-container"
          className="bottom-nav-item"
          href="#about"
          aria-label="Go to About"
        >
          <HiOutlineUser className="bottom-nav-icon" />
          <span>About</span>
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          hashSpy={true}
          smooth={true}
          offset={-64}
          duration={500}
          containerId="scrollable-container"
          className="bottom-nav-item"
          href="#contact"
          aria-label="Go to Contact"
        >
          <HiOutlineChatAlt2 className="bottom-nav-icon" />
          <span>Contact</span>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
