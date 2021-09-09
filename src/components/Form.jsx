import React from "react";

import "../styles/Form.css";

export default function Form() {
  return (
    <form
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
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
        </label>
        <br />
        <textarea
          className="form-item"
          id="message"
          name="message"
          rows="10"
          required
        ></textarea>
      </p>
      <div className="button-container">
        <input className="button" type="submit" value="Stuur bericht" />
      </div>
    </form>
  );
}
