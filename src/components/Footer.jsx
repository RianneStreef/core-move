import React from "react";

import MailChimp from "./MailChimp";
import SignUp from "./SignUp";
import Copyright from "./Copyright";

import "../styles/Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhoneAlt, faEnvelop } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <MailChimp />
      <SignUp />
      <p className="contact-footer">
        <FontAwesomeIcon
          className="contact-icon"
          icon={faEnvelop}
          size="1.5x"
        />
        info@coremove.nl -
        <FontAwesomeIcon
          className="contact-icon"
          icon={faPhoneAlt}
          size="1.5x"
        />
        0618756511
      </p>
      <Copyright />
    </div>
  );
};

export default Footer;
