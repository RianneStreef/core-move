import React from "react";

import "../styles/Form.css";

export default function Form() {
  return (
    <form
      className="contact-form"
      name="contactCoreMove"
      method="post"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="form-options">
        {" "}
        <label className="form-item" htmlFor="name">
          Naam:
        </label>{" "}
        <br />
        <input
          className="form-item"
          type="text"
          id="name"
          name="name"
          required
        />
      </p>
      <p className="form-options">
        {" "}
        <label className="form-item" htmlFor="email">
          Email:
        </label>{" "}
        <br />
        <input
          className="form-item"
          type="email"
          id="email"
          name="email"
          required
        />
      </p>
      <p className="form-options">
        <label className="form-item" htmlFor="message">
          Bericht:
        </label>{" "}
        <br />
        <textarea
          className="form-item"
          id="message"
          name="message"
          rows="10"
          required
        ></textarea>
      </p>
      <p className="button-container">
        <input className="button" type="submit" value="Submit message" />
      </p>
    </form>
  );
}
