import React from 'react';
import './Bio.style.scss';
import {FaGraduationCap} from 'react-icons/fa';
import {GiNetworkBars, GiCog} from 'react-icons/gi';

const Bio = ({changeColor}) => {
  return (
    <div>
      <div data-aos='fade-up' className='bio' data-aos-duration='1000'>
        <div className='bio__education'>
          <div className='bio__education--header'>
            <span>
              <FaGraduationCap />
            </span>
            <span>EDUCATION</span>
          </div>
          <div className='bio__education--details'>
            <div className='bio__education--details-info'>
              <div>
                <h3 className='bio__education--details-h3'>
                  Bachelor degree in commerce and accountancy, Thammasat
                  University
                </h3>
                <ul className='bio-ul bio__education--list'>
                  <li>Seccond honour with GPA 3.3</li>
                  <li>President of real estate major</li>
                  <li>Member of student commitee</li>
                </ul>
              </div>
              <div className='bio__education--details-year'>
                <h4>2014 - 2017</h4>
              </div>
            </div>
            <div className='bio__education--details-info'>
              <div>
                <h3 className='bio__education--details-h3'>
                  Triamudom Suksa School
                </h3>
                <ul className='bio-ul bio__education--list'>
                  <li>GPA 3.5</li>
                  <li>Arts-Japanese Major</li>
                </ul>
              </div>
              <div className='bio__education--details-year'>
                <h4>2012 - 2014</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='bio__education'>
          <div className='bio__education--header'>
            {' '}
            <span>
              <GiNetworkBars />
            </span>
            <span>EXPERIENCE</span>
          </div>
          <div className='bio__education--details'>
            <div className='bio__education--details-info'>
              <div>
                <h3 className='bio__education--details-h3'>
                  Sales and marketing-naremitr innovation co., ltd.
                </h3>
                <ul className='bio-ul bio__education--list'>
                  <li>Conducted marketing plan and executed accordingly</li>
                  <li>Gathered requirements from customers</li>
                  <li>Assisted sales tean on presenting company products</li>
                </ul>
              </div>
              <div className='bio__education--details-year'>
                <h4>FEB 2020 - MAY 2020</h4>
              </div>
            </div>
            <div className='bio__education--details-info'>
              <div>
                <h3 className='bio__education--details-h3'>
                  Entrepreneur - Global nature alliance co.,ltd.
                </h3>
                <ul className='bio__education--list'>
                  <li>
                    Manufactured and distributed products(processed fruit)
                  </li>
                  <li>
                    Provided specific products for local goverment organization
                  </li>
                </ul>
              </div>
              <div className='bio__education--details-year'>
                <h4>JUNE 2018 - JUNE 2019</h4>
              </div>
            </div>
            <div className='bio__education--details-info'>
              <div>
                <h3 className='bio__education--details-h3'>
                  intern (coins.co.th)
                </h3>
                <ul className='bio__education--list'>
                  <li>
                    Initiated the sale&marketing division by producing campaigns
                    nad analysing data
                  </li>
                  <li>
                    Organized the first meet-up event, setting up the venue,
                    catering all 50+ guests
                  </li>
                </ul>
              </div>
              <div className='bio__education--details-year'>
                <h4>2016</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='bio__education'>
          <div className='bio__education--header'>
            {' '}
            <span>
              <GiCog />
            </span>
            <span>STACKS</span>
          </div>
          <div className='bio__stacks'>
            <div className='bio__stacks--details'>
              <div className='skills-container'>
                <img src='assets/stacks/js.png' alt='' className='stacks' />
                <img src='assets/stacks/css.png' alt='' className='stacks' />
                <img src='assets/stacks/sass.png' alt='' className='stacks' />
              </div>
              <div className='skills-container'>
                <img src='assets/stacks/react.png' alt='' className='stacks' />
                <img src='assets/stacks/antd.png' alt='' className='stacks' />
                <img
                  src='assets/stacks/bootstrap.png'
                  alt=''
                  className='stacks'
                />
              </div>
              <h3 className='bio__stacks--details-h3'>Frontend Tech</h3>
            </div>
            <div className='bio__stacks--details'>
              <div className='skills-container'>
                <img
                  src='assets/stacks/nodejs-01.png'
                  alt=''
                  className='stacks'
                />
                <img src='assets/stacks/sql.png' alt='' className='stacks' />
                <img
                  src='assets/stacks/postgres.png'
                  alt=''
                  className='stacks'
                />
              </div>
              <div className='skills-container'>
                <img src='assets/stacks/mongo.png' alt='' className='stacks' />
                <img src='assets/stacks/docker.png' alt='' className='stacks' />
              </div>
              <h3 className='bio__stacks--details-h3'>Backend Tech</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
