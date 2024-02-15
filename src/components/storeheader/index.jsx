/*
import React, { useState } from 'react';
import './StoreHeader.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

import logo from '../../assets/header/awlogo1.png';



const StoreHeader = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <span className="navbar-toggle" id="js-navbar-toggle" onClick={handleClick}>
        <i className="fas fa-bars"></i>
      </span>
      <div className="d-flex justify-content-start align-items-center divlogo">
        <img src={logo} height="80px" width="80px" alt="AnimeWorld Logo" />
        <a href="index.html" className="logo">AnimeWorld</a>
      </div>

      <ul className={`main-nav ${isActive ? 'active' : ''}`} id="main-menu">
        <li className="menu-content">
          <a href="index.html" className="nav-links fs-3" onClick={handleClick}>Home</a>
        </li>
        <li className="menu-content">
          <a href="anime.html" className="nav-links fs-3" onClick={handleClick}>Anime</a>
        </li>
        <li className="menu-content">
          <a href="news.html" className="nav-links fs-3" onClick={handleClick}>News</a>
        </li>
        <li className="menu-content">
          <a href="#" className="nav-links fs-3" id="linkStore" onClick={handleClick}>Store</a>
        </li>
        <li className="menu-content">
          <a href="signin.html" className="nav-links fs-3" onClick={handleClick}>Sign in</a>
        </li>
      </ul>

      <ul className="sub-menu">
        <li className="sub-menu-content">
          <a href="#" className="nav-links fs-3" id="linkMenu" onClick={handleClick}>Menu</a>
        </li>
      </ul>

      <ul className="store-menu">
        <li className="store-content">
          <a href="#" className="nav-links fs-3" onClick={handleClick}>All</a>
        </li>
        <li className="store-content">
          <a href="#" className="nav-links fs-3" onClick={handleClick}>Accessories</a>
        </li>
        <li className="store-content">
          <a href="#" className="nav-links fs-3" onClick={handleClick}>Blu-ray</a>
        </li>
        <li className="store-content">
          <a href="#" className="nav-links fs-3" onClick={handleClick}>Clothing</a>
        </li>
        <li className="store-content">
          <a href="#" className="nav-links fs-3" onClick={handleClick}>Figures</a>
        </li>
        <li className="store-content">
          <a href="#" className="nav-links fs-3" onClick={handleClick}>Manga</a>
        </li>
      </ul>
    </nav>
  );
};




export { StoreHeader };

*/