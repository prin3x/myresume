import React, {useState} from 'react';
import './/Navbar.style.scss';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import IconContainer from '../IconContainer/IconContainer';
import {motion} from 'framer-motion';

const Navbar = ({name, location, setBgColor}) => {
  const [currentPage, setCurrentPage] = useState({
    backgroundColor: '#c9d6df',
    belowBgColor: '#f6fcfd',
    intro: 'Here below are details about me.',
    icon: 'fas fa-tasks fa-7x tool',
    content: "I'm Prince - A Developer",
  });
  const changeColorAndText = (
    backgroundColor,
    belowBgColor,
    intro,
    icon,
    content
  ) => {
    setCurrentPage({...currentPage, backgroundColor, intro, icon, content});
    setBgColor(belowBgColor);
  };
  const {backgroundColor, intro} = currentPage;
  const resumeAttr = [
    '#c9d6df',
    '#f6fcfd',
    'Here below are details about me.',
    'fas fa-tasks fa-7x tool',
    "I'm Prince - A Developer",
  ];
  const projectAttr = [
    '#333533',
    '#242423',
    'Maybe quite few because I just switch from another courier.',
    'fas fa-tools fa-7x tool',
    'These are my projects',
  ];
  const contactAttr = [
    '#ffe6a7',
    '#6f1d1b',
    'It is be my pleasure to have your visit.',
    'fas fa-address-book fa-7x tool',
    'Hope you enjoy my little website',
  ];

  return (
    <div>
      <nav className='navbar' style={{backgroundColor}}>
        <div className='navbar__content-container'>
          <div className='navbar__image-container'>
            {/*<img
            className='avatar'
            src={avatar}
            alt='Avatar'
            style={{
              width: "10rem",
              borderRadius: "50%",
            }}
          />*/}

            <IconContainer iconClass={currentPage.icon} />
          </div>
          <div className='navbar__info'>
            <div className='nav navbar__greeting'>
              Hi <span>{name}</span> ! ,
            </div>
            <motion.div
              key={currentPage.content}
              initial={{x: -300, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
              className='nav navbar__info--header'
            >
              {currentPage.content}
            </motion.div>
            <motion.div
              key={currentPage.icon}
              initial={{x: 300, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
              className='nav navbar__info--paragraph'
            >
              {intro}
            </motion.div>
          </div>
          <div className='navbar__container'>
            <NavLink
              exact
              to='/'
              className='link link-1'
              onClick={() => changeColorAndText(...resumeAttr)}
            >
              <div className='btn primary'>Résumé</div>
            </NavLink>
            <NavLink
              to='/projects'
              className='link link-3'
              onClick={() => changeColorAndText(...projectAttr)}
            >
              <div className='btn tietiary'>Projects</div>
            </NavLink>{' '}
            <NavLink
              to='/contact'
              className='link link-2'
              onClick={() => changeColorAndText(...contactAttr)}
            >
              <div className='btn secondary'> Contact</div>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
