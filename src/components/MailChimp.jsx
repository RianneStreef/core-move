import React from "react";

import "../styles/MailChimp.css";

// import addToMailchimp from "gatsby-plugin-mailchimp";

const MailChimp = () => {
  return (
    <div className="mail-chimp content padding">
      <h2>Meld je aan voor meer informatie</h2>
      <p>
        Wil op graag op de hoogte gehouden worden? Schrijf je nu in voor de
        nieuwsbrief en kom in aanmerking voor korting en win-acties.
      </p>
      <div className="subscribe-component">
        <label className="subscribe">
          Email adres:
          <input className="subscribe-input" />
        </label>
        <button className="button">Subscribe</button>
      </div>
    </div>
  );
};

export default MailChimp;
