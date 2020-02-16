import React from "react";
import NavBar from "../NavBar";
import css from './Projects.module.css'
import queen from '../../Assets/Images/queen.png'

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
              {/* <div>
                            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Xm_6fko2eK9tszCD93-L7zjjlpSqqbwT" width="640" height="480"></iframe>
                    </div> */}
           </div>
      </main>
      </>
  );
};

export default Projects;
