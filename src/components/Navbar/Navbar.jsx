import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='nav-wrapper'>
      <div className='nav-content'>
        <img className='logo' src="./assets/images/logo.svg" alt='Logo' />
        <ul>
          <li>
            <a href="#" className='menu-item'>Home</a>
          </li>
          <li>
            <a href="#" className='menu-item'>Skills</a>
          </li>
          <li>
            <a href="#" className='menu-item'>Work Experience</a>
          </li>
          <li>
            <a href="#" className='menu-item'>Contact</a>
          </li>
          <li>
            <button className='contact-btn' onClick={() => {}}>Hire Me</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
