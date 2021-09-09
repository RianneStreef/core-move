import React from "react";
import { Link } from "gatsby";

import "../styles/NavMenu.css";

const NavMenu = () => {
  return (
    <div className="nav-menu-container">
      <nav>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/base">base</Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/mama">mama</Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/work">work</Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/about">about</Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/tarieven">tarieven</Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
