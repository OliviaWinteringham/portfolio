import React from "react";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import css from "./Contact.module.css";



const Contact = () => {
  return (
    <>
      <NavBar />
      <div className={css.header}>
        <div className={css.contactText}>
          <h1> want to collaborate? fancy a chat? please get in touch</h1>
          <Link to="/twitter" target="_blank">
          <h2> get in touch via twitter <strong>@owinteringham</strong>{" "}
          </h2>
      </Link>
        </div>
      </div>
    </>
  );
};



export default Contact;
