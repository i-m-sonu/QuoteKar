import React, { useState } from "react";
import "../css/Menu.css"; // Assuming you have your CSS styles in a separate file
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="space">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <div className={`nav-menu ${menuOpen ? "show" : ""}`}>
        <div className="nav">
          <Link to="/">
            <strong>Home</strong>
          </Link>
          {/* <Link to="/Search">
            <strong>Search</strong>
          </Link> */}
          <Link to="/About">
            <strong>About</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
