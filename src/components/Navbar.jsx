import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import HamburgerMenu from "./Hambergermenu";

const Navbar = () => {
  return (
    <>
      <div className="head">
        <h3>QuoteKar</h3>
        <HamburgerMenu/>

       
      </div>
    </>
  );
};

export default Navbar;
