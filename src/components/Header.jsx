import React from "react";
import { Link } from "gatsby";

import NavMenu from "./NavMenu";

import logo from "../images/logo.png";

import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Link className="header-link" to="/">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      <NavMenu />
    </div>
  );
};

export default Header;
