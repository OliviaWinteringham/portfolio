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
          <p>
            send me an email: <strong>owinteringham [at] gmail.com</strong>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
