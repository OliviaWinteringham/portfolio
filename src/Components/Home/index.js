import React from "react";
import css from "./Home.module.css";
import Emoji from "../Emoji";
import NavBar from "../NavBar";

function Home() {
  return (
    <>
      <nav>
      <NavBar />
      </nav>
      <article>
      <div className={css.textContainer}>
        <h1 className={css.oliviaHeader} id={css.oliviaHeaderHover}>
          Olivia Winteringham
        </h1>
        <p className={css.intro}>learned to code with The School of Code bootcamp</p>
      </div>
     <p className={css.languages}>
        <Emoji symbol="👩‍🔧" label="woman mechanic" />HTML5{"  "}
        <Emoji symbol="👩‍🏭" label="factory worker" /> CSS3{" "}
        <Emoji symbol="👩‍💻" label="woman technologist" /> javaScript{"  "}
        <Emoji symbol="👩‍🎨" label="woman artist" />react{"  "}
        <Emoji symbol="👩‍🚀" label="woman astronaut" />react-native{"  "}
        <Emoji symbol="👩‍" label="woman" /> mongoDB{"  "}
        {"  "}
      </p>
      <p className={css.madeInReact}>
        I built this website in React
      </p>
      </article>
    </>
  );
}

export default Home;
