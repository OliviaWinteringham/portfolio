import React from "react";
import NavBar from "../NavBar";
import css from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className={css.header}>
        <div className={css.contactText}>
          <h1> want to collaborate? fancy a chat? please get in touch</h1>
          <p> get in touch via twitter <strong>@owinteringham</strong>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
