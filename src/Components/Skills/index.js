import React from "react";
import NavBar from "../NavBar";
import css from "./skills.module.css"

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <nav>
        <NavBar />
        </nav>
        <main>
          <h1 className={css.skillsText}>Skills...coming soon</h1>
        </main>
      </> 
    );
  }
}

export default Skills;

