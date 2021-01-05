import './header.css';
import logo from '../../assets/images/logo.svg';

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className='navbar' role='navigation'>
        <div className='main_nav'>
          <div className='logo'>
            <img src={logo} className='logo' alt='logo' />
          </div>
          <div className='menu_btn' onClick={() => setIsOpen(!isOpen)}>
            <p>MENU</p>
            <button
              className={`hamburger hamburger-anim ${
                isOpen ? 'is-active' : ''
              }`}
              type='button'
            >
              <span className='hamburger-box'>
                <span className='hamburger-inner'></span>
              </span>
            </button>
          </div>
        </div>
        <div className='menu'>
          <div className={`wrap_menu ${isOpen ? 'is-active' : ''}`}>
            <ul>
              <li>
                <NavLink className='nav-item' to='/'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className='nav-item' to='/projects'>
                  Projets
                </NavLink>
              </li>
              <li>
                <NavLink className='nav-item' to='/contact'>
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
