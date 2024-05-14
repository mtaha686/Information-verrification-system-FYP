import React from "react";
import { Link } from "react-router-dom";
import "../assets/CSS/styles.css";
import logo from "../assets/images/logo.svg";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <ul className="logo">
          <img src={logo} alt="Logo" />
        </ul>
        <ul className="headers">
          <li className="links-header">
            <Link to="/records">Records</Link>
          </li>
          <li className="links-header">
            <Link to="/application">Application</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
