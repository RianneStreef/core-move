import React from "react";

import NavMenu from "./NavMenu";

import logo from "../images/logo.png";

import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="Logo" />
      <NavMenu />
    </div>
  );
};

export default Header;
