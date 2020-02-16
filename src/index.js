import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

import * as serviceWorker from "./serviceWorker";
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const routing = (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/skills" component={Skills} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
    <Route path='/twitter' component={() => { window.location = 'https://twitter.com/owinteringham'} }/>
    <Route path='/medium' component={() => { window.location = 'https://blog.schoolofcode.co.uk/a-beginners-guide-to-creating-your-very-own-custom-web-font-7b71b16f4ef3'} }/>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
