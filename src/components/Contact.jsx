import React from "react";

import "../styles/Contact.css";

import Form from "./Form";

const Contact = () => {
  return (
    <div className="contact">
      <h4>Contact</h4>
      <p>
        Email:{" "}
        <a className="contact-link" href="mailto:info@coremove.nl">
          info@coremove.nl
        </a>
      </p>
      <p>
        WhatsApp:{" "}
        <a className="contact-link" href="tel:+33618756511">
          0618756511
        </a>
      </p>
      <Form />
    </div>
  );
};

export default Contact;
