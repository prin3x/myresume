import React, { Fragment } from 'react';
import "./Card.style.scss";

const Card = () => {
  return (
    <Fragment>
      <div className='card-list'>
        <article class='card card-1'>
          <header class='card-header'>
            <div className='background-container'>
              <img
                src='assets\websitescreenshot\sasomtambun.png'
                className='card-img'
                alt='sasomtambun'
              />
            </div>
          </header>
          <a
            href='https://sasomtambun.netlify.app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='skel-button'>Navigate</button>
          </a>
        </article>
        <article class='card'>
          <header class='card-header'>
                        <div className='background-container'>
              <img
                src='assets\websitescreenshot\corretto.png'
                className='card-img'
                alt='sasomtambun'
              />
            </div>
          </header>
          <a
            href='https://prin3x-corretto.netlify.app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='skel-button'>Navigate</button>
          </a>
        </article>
        <article class='card'>
          <header class='card-header'>
                        <div className='background-container'>
              <img
                src='assets\websitescreenshot\bookstore.png'
                className='card-img'
                alt='sasomtambun'
              />
            </div>
          </header>
          <a
            href='https://prin3xbookstore.netlify.app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='skel-button'>Navigate</button>
          </a>
        </article>
      </div>
    </Fragment>
  );
};

export default Card;
