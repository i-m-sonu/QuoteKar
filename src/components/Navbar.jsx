import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="head">
        <h3>QuoteKar</h3>

        <div className="nav">
          <Link to="/">
            <strong>Home</strong>
          </Link>
          <Link to="/Search">
            <strong>Search</strong>
          </Link>
          <Link to="/About">
            <strong>About</strong>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
