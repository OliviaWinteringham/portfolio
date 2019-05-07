import React from "react";
import NavBar from "../NavBar";
import css from './Projects.module.css'

const Projects = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
      <h1 className={css.projectText}>Projects... coming soon</h1>
      </main>
    </>
  );
};

export default Projects;
