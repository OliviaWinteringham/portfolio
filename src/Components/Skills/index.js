import React from "react";
import NavBar from "../NavBar";
import css from "./skills.module.css";
import { Link } from "react-router-dom";

class Skills extends React.Component {

  render() {

    return (
      <>
        <nav>
        <NavBar/>
        </nav>
        <main className={css.page}> 
          <h1 className={css.editableText} contenteditable="true">Click here, delete and start typing</h1>
          <p className={css.skillsBody}>I really like typography, so I made my own webfont which you can see above. It's called...</p>
          <h1 className={css.socfont}>'contrbutions from everyone at School of Code' - catchy?</h1>
          <p className={css.skillsBody}>This is another I made from my handwriting, I have called it...</p>
          <h1 className={css.olivia}>olivia</h1>
          <p className={css.skillsBody}> you can read about how to...<Link to="/medium">make your own webfont here</Link> 
          </p>
        </main>
        </>
    );
  }
}

export default Skills;

