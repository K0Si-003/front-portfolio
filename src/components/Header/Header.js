import './header.css';
import logo from '../../assets/images/logo.svg';
import github from '../../assets/images/github.svg';
import linkedin from '../../assets/images/linkedin.svg';
// import moon from '../../assets/images/moon.svg';

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 100);

  const closeMenu = (isMenuOpen) => (isMenuOpen ? setIsMenuOpen(false) : null);

  return (
    <header>
      <NavLink className='name' to='./'>
        <img
          src={logo}
          className='logo'
          title='logo'
          alt='logo'
          onClick={closeMenu}
        />
      </NavLink>
      <div className='wrap'>
        <div className='social_icons'>
          <a
            href='https://www.linkedin.com/in/hugo-pioda/'
            target='_blank'
            rel='noopener noreferrer'
            onClick={closeMenu}
          >
            <img src={linkedin} title='logo' alt='logo' />
          </a>
          <a
            href='https://github.com/K0Si-003'
            target='_blank'
            rel='noopener noreferrer'
            onClick={closeMenu}
          >
            <img src={github} title='logo' alt='logo' />
          </a>
        </div>
        <div className='menu_btn' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <button
            className={`hamburger hamburger-anim ${
              isMenuOpen ? 'is-active' : ''
            }`}
            type='button'
          >
            <span className='hamburger-box'>
              <span className='hamburger-inner'></span>
            </span>
          </button>
        </div>
      </div>
      <nav
        className={`main_nav ${isMenuOpen ? 'is-active' : ''}`}
        role='navigation'
      >
        <ul className='wrap_menu'>
          <li>
            <NavLink to='/' onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/projets' onClick={closeMenu}>
              Projets
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' onClick={closeMenu}>
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={`curtain ${isLoaded ? 'hidden' : ''}`}></div>
      <div className='background'>
        {/*         <ul>
          <li className='star' id='star-1'></li>
          <li className='star' id='star-2'></li>
          <li className='star' id='star-3'></li>
          <li className='star' id='star-4'></li>
          <li className='star' id='star-5'></li>
          <li className='star' id='star-6'></li>
          <li className='star' id='star-7'></li>
          <li className='star' id='star-8'></li>
        </ul>
        <div className='moon'>
          <img src={moon} className='bg-stars' alt='bg' />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
