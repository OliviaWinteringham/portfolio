import React from "react";
import css from "./App.module.css";
import Emoji from "../Emoji";

function App() {
  return (
    <>
      <div className={css.header}>
        <button className={css.button} id={css.buttonHome}>
          home
        </button>
        <button className={css.button} id={css.buttonSkills}>
          skills
        </button>
        <button className={css.button} id={css.buttonProjects}>
          projects
        </button>
        <button className={css.button} id={css.buttonContact}>
          contact
        </button>
      </div>
      <div className={css.textContainer}>
        <h1 className={css.oliviaHeader} id={css.oliviaHeaderHover}>
          {" "}
          Olivia Winteringham
        </h1>
        <h2 className={css.oliviaDescription}>junior web developer</h2>
        <p className={css.intro}>graduate of The School of Code bootcamp</p>
      </div>
      <p className={css.languages}>
        <Emoji symbol="👩‍🔧" label="woman mechanic" /> react{"  "}
        <Emoji symbol="👩‍🏭" label="factory worker" /> gatsby{" "}
        <Emoji symbol="👩‍💻" label="woman technologist" /> javaScript{"  "}
        <Emoji symbol="👩‍🎨" label="woman artist" /> mongodb{"  "}
        <Emoji symbol="👩‍🚀" label="woman astronaut" /> node{"  "}
        <Emoji symbol="👩‍" label="woman" /> express{"  "}
        <Emoji symbol="🧟‍" label="woman artist" /> jonny lester evangelist
        {"  "}
        <Emoji symbol="🙌" label="raising hands" />
      </p>
    </>
  );
}

export default App;
