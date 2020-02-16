import React from "react";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import css from "./Contact.module.css";



const Contact = () => {
  return (
    <>
     <nav>
      <NavBar />
      </nav>
      <main>
      <div className={css.header}>
        <div className={css.contactText}>
          <h1> want to collaborate? fancy a chat? please get in touch</h1>
          <Link to="/twitter">
          <h2> get in touch via twitter @owinteringham
          </h2>
          </Link>
        </div>
      </div>
      </main>
    </>
  );
};



export default Contact;
