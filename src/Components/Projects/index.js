import React from "react";
import NavBar from "../NavBar";
import css from './Projects.module.css'
import queen from '../../Assets/queen.png'

const Projects = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
      {/* <h1 className={css.projectText}>Projects... coming soon</h1> */}
      <div className={css.container}>
            <img className={css.image} src={queen} alt='queen of hearts'></img>
              <article className={css.overlay}>
                <div className={css.overlayText}>'52 cards from around the world'<br></br> coming soon... </div>
              </article>
           </div>
      </main>
      </>
  );
};

export default Projects;
