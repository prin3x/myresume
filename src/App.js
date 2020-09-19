import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.component";
import Contact from "./components/contact/Contact.components";
import { Route, Switch } from "react-router-dom";
import Bio from "./components/bio/Bio.component";
import Projects from "./components/projects/Projects.components";
import Intro from "./components/intro/Intro.component";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const [name, setName] = useState("Nobody");
  const [animation, setAnimation] = useState();
  const handleName = e => {
    setName(e.target.value);
  };
  const handleAnimation = () => {
    setAnimation("forwards hideInput 500ms ease");
  };
  const handleKeypress = e => {
    if (e.key === "Enter") {
      handleAnimation();
    }
  };
  return (
    <div>
      <Intro
        handleName={handleName}
        animation={animation}
        handleKeypress={handleKeypress}
        handleAnimation={handleAnimation}
      />
      <Navbar name={name} />
      <Switch>
        <Route exact path='/'>
          <Bio />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
