import React from "react";
import "./Contact.style.scss";
import { ReactComponent as EmailLogo } from "../../gmail.svg";
import { ReactComponent as PhoneLogo } from "../../phone.svg";
import { ReactComponent as LocationLogo } from "../../gps.svg";
import { ReactComponent as FacebookLogo } from "../../facebook.svg";

const Contact = () => {
  return (
    <div className='contact'>
      <div
        className='contact__icon-container'
        data-aos='fade-up'
        data-aos-anchor-placement='center-bottom'
        data-aos-duration='1000'
      >
        <div className='wrapper__container'>
          <div className='wrapper__icon icon__tel'>
            <PhoneLogo fill='white' />
          </div>
          <div className='wrapper__info'>
            <p>+66 - 84 - 757 - 9813 &nbsp; </p>
          </div>
        </div>
        <div className='wrapper__container'>
          <div className='wrapper__icon icon__email'>
            <EmailLogo fill='white' />
          </div>
          <div className='wrapper__info'>
            <p>Sarut1994@gmail.com</p>
          </div>
        </div>
        <div className='wrapper__container'>
          <div className='wrapper__icon icon__location'>
            <LocationLogo fill='white' />
          </div>
          <div className='wrapper__info'>
            <p>Bearing Bangna Bankok</p>
          </div>
        </div>
        <div className='wrapper__container'>
          <div className='wrapper__icon icon__facebook'>
            <FacebookLogo fill='white' />
          </div>
          <div className='wrapper__info'>
            <p>Sarut Trikham &nbsp; &nbsp; &nbsp; </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
