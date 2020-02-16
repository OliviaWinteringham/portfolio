import React from "react";
import NavBar from "../NavBar";
import css from "./skills.module.css";

class Skills extends React.Component {

  render() {
    // const text  = this.state;
    return (
      <>
        <nav>
        <NavBar/>
        </nav>
        <main className={css.page}> 
          {/* <h1 className={css.skillsText}>Skills</h1> */}
          <h1 className={css.editableText} contenteditable="true">Click here, delete and start typing</h1>
          <p className={css.skillsBody}>I really like typography, so I made my own webfont which you can see above and in this website. It's called...</p>
          <h1 className={css.olivia}>'contrbutions from everyone at School of Code - catchy?'</h1>
          <h1 className={css.socfont}>And this is the webfont I created with The School of Code Cohort Two: contributions from students, lecturers, supporters and even the Mayor of Birmingham, Andy Street</h1>
        </main>
        </>
    );
  }
}

export default Skills;

