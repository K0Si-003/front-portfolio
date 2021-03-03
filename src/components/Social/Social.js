import './social.css';
import github from '../../assets/images/github.svg';
import linkedin from '../../assets/images/linkedin.svg';

import React from 'react';
import PropTypes from 'prop-types';

const Social = ({ closeMenu }) => {
  return (
    <>
      <a
        href='https://www.linkedin.com/in/hugo-pioda/'
        target='_blank'
        rel='noopener noreferrer'
        onClick={closeMenu}
      >
        <img src={linkedin} alt='Linkedin Logo' />
      </a>
      <a
        href='https://github.com/K0Si-003'
        target='_blank'
        rel='noopener noreferrer'
        onClick={closeMenu}
      >
        <img src={github} alt='Github Logo' />
      </a>
    </>
  );
};

Social.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default Social;
