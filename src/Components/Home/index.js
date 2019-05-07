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
        <h2 className={css.oliviaDescription}>junior web developer</h2>
        <p className={css.intro}>graduate of The School of Code bootcamp</p>
      </div>
      <p className={css.languages}>
        <Emoji symbol="👩‍🔧" label="woman mechanic" />HTML5{"  "}
        <Emoji symbol="👩‍🏭" label="factory worker" /> CSS3{" "}
        <Emoji symbol="👩‍💻" label="woman technologist" /> javaScript{"  "}
        <Emoji symbol="👩‍🎨" label="woman artist" />react{"  "}
        <Emoji symbol="👩‍🚀" label="woman astronaut" />react-native{"  "}
        <Emoji symbol="👩‍" label="woman" /> mongoDB{"  "}
        {"  "}
        <Emoji symbol="🙌" label="raising hands" />AWS
      </p>
      <p className={css.madeInReact}>
        this website was designed by me in React
      </p>
      </article>
    </>
  );
}

export default Home;
