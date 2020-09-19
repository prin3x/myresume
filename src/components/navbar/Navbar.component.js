import React, { useState, useEffect } from "react";
import ".//Navbar.style.scss";
import { Link, NavLink } from "react-router-dom";
import avatar from "../../assets/img/avatar.jpg";
import { withRouter } from "react-router-dom";

const Navbar = ({ name, location }) => {
  const [currentPage, setCurrentPage] = useState({
    color: "#000",
    backgroundColor: "#c9d6df",
    intro: "Here below are there litle details about me",
  });
  console.log(location.pathname);
  const changeColorAndText = (backgroundColor, color, intro) => {
    setCurrentPage({ ...currentPage, backgroundColor, intro, color });
  };
  const { backgroundColor, color, intro } = currentPage;
  const resumeAttr = [
    "#c9d6df",
    "#000",
    "Here below are there litle details about me",
  ];
  const projectAttr = [
    "#333533",
    "#f5cb5c",
    "They are sure coming in few days",
  ];
  const contactAttr = [
    "#ffe6a7",
    "#432818",
    "I'll answer your call as soon as possible",
  ];

  return (
    <div>
      <nav className='navbar' style={{ backgroundColor, color }}>
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

          {location.pathname === "/projects" ? (
            <i className='fas fa-tasks fa-7x tool'></i>
          ) : location.pathname === "/contact" ? (
            <i className='fas fa-address-book fa-7x tool'></i>
          ) : (
            <i className='fas fa-tools fa-7x tool'></i>
          )}
        </div>
        <div className='navbar__info'>
          <div className='navbar__greeting'>
            Hi <span>{name}</span> ! ,
          </div>
          <div className='navbar__info--header'>
            I'm Prince - A Web Developer
          </div>
          <div className='navbar__info--paragraph'>{intro}</div>
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
          </NavLink>{" "}
          <NavLink
            to='/contact'
            className='link link-2'
            onClick={() => changeColorAndText(...contactAttr)}
          >
            <div className='btn secondary'> Contact</div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
