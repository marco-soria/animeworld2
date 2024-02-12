// Header.js
import React, { useState } from 'react';
import './Header.css';
import { Link, Outlet } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";


import logo from '../../assets/header/awlogo1.png';
 // Importa el archivo de estilos local


const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <span className="navbar-toggle" onClick={handleClick}>
        <GiHamburgerMenu />
      </span>
      <div className="divlogo">
        <img src={logo} height="75px" width="75px" alt="AnimeWorld Logo" />
        <Link to="/" className="logo">AnimeWorld</Link>
      </div>
      <ul className={`main-nav ${isActive ? 'active' : ''}`}>
        <li>
          <Link to="/" className="nav-links">Home</Link>
        </li>
        <li>
          <Link to="/anime" className="nav-links fs-3">Anime</Link>
        </li>
        <li>
          <Link to="/news" className="nav-links fs-3">News</Link>
        </li>
        <li>
          <Link to="/store" className="nav-links fs-3">Store</Link>
        </li>
        <li>
          <Link to="/signin" className="nav-links fs-3">Sign in</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
