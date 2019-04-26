import React from "react";
import css from "./Home.module.css";
import Emoji from "../Emoji";
import NavBar from "../NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <div className={css.textContainer}>
        <h1 className={css.oliviaHeader} id={css.oliviaHeaderHover}>
          Olivia Winteringham
        </h1>
        <h2 className={css.oliviaDescription}>junior web developer</h2>
        <p className={css.intro}>graduate of The School of Code bootcamp</p>
      </div>
      <p className={css.languages}>
        <Emoji symbol="👩‍🔧" label="woman mechanic" />
        <span> </span> react{"  "}
        <Emoji symbol="👩‍🏭" label="factory worker" /> gatsby{" "}
        <Emoji symbol="👩‍💻" label="woman technologist" /> javaScript{"  "}
        <Emoji symbol="👩‍🎨" label="woman artist" /> mongodb{"  "}
        <Emoji symbol="👩‍🚀" label="woman astronaut" /> node{"  "}
        <Emoji symbol="👩‍" label="woman" /> express{"  "}
        <Emoji symbol="🧟‍" label="woman artist" /> jonny lester evangelist
        {"  "}
        <Emoji symbol="🙌" label="raising hands" />
      </p>
      <p className={css.madeInReact}>
        this website was designed by me in React
      </p>
    </>
  );
}

export default Home;
