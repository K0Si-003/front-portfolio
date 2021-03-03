import './header.css';
import logo from '../../assets/images/logo.svg';
import Canvas from '../Canvas/Canvas';
import Social from '../Social/Social';

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 200);

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
      <div className='right_wrap'>
        <div className='social_icons'>
          <Social closeMenu={closeMenu} />
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
        <div className='wrap_social'>
          <Social closeMenu={closeMenu} />
        </div>
      </nav>
      <div className={`curtain ${isLoaded ? 'hidden' : ''}`}></div>
      <div className='background'>
        <Canvas />
      </div>
    </header>
  );
};

export default Header;
