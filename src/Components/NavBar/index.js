import React from "react";
import { Link } from "react-router-dom";
import css from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={css.header}>
      <Link to="/">
        <button className={css.button} id={css.buttonHome}>
          home
        </button>
      </Link>
      <Link to="/skills">
        <button className={css.button} id={css.buttonSkills}>
          skills
        </button>
      </Link>
      <Link to="/projects">
        <button className={css.button} id={css.buttonProjects}>
          projects
        </button>
      </Link>
      <Link to="/contact">
        <button className={css.button} id={css.buttonContact}>
          contact
        </button>
      </Link>
    </nav>
  );
}

export default NavBar;
