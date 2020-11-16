import React, {useState, useEffect, Fragment} from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.component';
import Contact from './components/contact/Contact.components';
import {Route, Switch} from 'react-router-dom';
import Bio from './components/bio/Bio.component';
import Projects from './components/projects/Projects.components';
import Intro from './components/intro/Intro.component';
import AOS from 'aos';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100vw;
  background: ${props => props.bgColor};
  height: 100%;
  z-index: 50;
  display: flex;
  justify-content: center;
`;

function App() {
  const [bgColor, setBgColor] = useState('#fff');

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const [name, setName] = useState('Guess');
  const [animation, setAnimation] = useState();
  const handleName = e => {
    setName(e.target.value);
  };
  const handleAnimation = () => {
    setAnimation('forwards hideInput 500ms ease');
  };
  const handleKeypress = e => {
    if (e.key === 'Enter') {
      handleAnimation();
    }
  };
  return (
    <Fragment>
      <Intro
        handleName={handleName}
        animation={animation}
        handleKeypress={handleKeypress}
        handleAnimation={handleAnimation}
      />
      <Navbar name={name} setBgColor={setBgColor} />
      <MainContainer bgColor={bgColor}>
        <Switch>
          <Route exact path='/'>
            <Bio />
          </Route>
          <Route exact path='/projects'>
            <Projects />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </MainContainer>
    </Fragment>
  );
}

export default App;
