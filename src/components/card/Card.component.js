import React, { Fragment } from 'react';
import "./Card.style.scss";

const Card = () => {
  return (
    <Fragment>
      <div className='card-list'>
        <article class='card card-1'>
          <header class='card-header'>
            <div className="background-container">

          <img src="assets\websitescreenshot\sasomtambun.png"  className='card-img' alt="sasomtambun"/>
            </div>
            <h2>Sasomtambun</h2>
          </header>
          <a href="https://sasomtambun.netlify.app" target="_blank" rel='noreferrer'>
          <button  className='skel-button'>Navigate</button></a>
        </article>
        {/* Second*/}
        <article class='card'>
          <header class='card-header'>
            <h2>Corretto</h2>
          </header>
        </article>
        {/* Third*/}
        <article class='card'>
          <header class='card-header'>
            <h2>Handicap</h2>
          </header>
        </article>
        {/* Third*/}
      </div>
    </Fragment>
  );
};

export default Card;
