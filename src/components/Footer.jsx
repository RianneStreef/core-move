import React from "react";

import MailChimp from "./MailChimp";
import SignUp from "./SignUp";
import Copyright from "./Copyright";
import Contact from "./Contact";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <MailChimp />
      <SignUp />
      <Contact />
      <Copyright />
    </div>
  );
};

export default Footer;
