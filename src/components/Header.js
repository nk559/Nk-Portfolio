import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='navbar'>
      <div className='heading'>
        <span><Link to='/' className='heading-left'>Portfolio:</Link>Nareshkumar Anandan</span>
      </div>
      <nav>
        <div className='menu-icon' onClick={toggleMenu}>
          <div className='hamburger'></div>
          <div className='hamburger'></div>
          <div className='hamburger'></div>
        </div>
        <ul className={`nav-right ${isOpen ? 'active' : ''}`}>
          <li><Link to='/home' className='nav-links'>Home</Link></li>
          <li><Link to='/projects' className='nav-links'>Projects</Link></li>
          <li><Link to='/process' className='nav-links'>Process</Link></li>
          <li><Link to='/about' className='nav-links'>About</Link></li>
          <li><Link to='/contact' className='nav-links'><button className='contact'>Contact</button></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
