import React from 'react';
import  './navbar.style.css';


import facebook from "../navbar/Navbar/fb.png";
import instagram from "../navbar/Navbar/insta.png";
import youtube from "../navbar/Navbar/YT.png";
import twitter from "../navbar/Navbar/twitter.png";
import { Link,animateScroll as scroll } from "react-scroll";


function Navbar(props ) {
  return (
    
    
    <header>
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className="head">
        <a  className="logo" onClick={() => scroll.scrollToTop()}>
          Landify
        </a>
        <nav className="nav">
          <ul className="navbar">
            <li>
              <Link to="intro" spy={true} smooth={true} duration={1000}>About</Link>
            </li>
            <li>
            <Link  to="contact" offset={50} spy={true} smooth={true} duration={1000}>Contact</Link>
            </li>
            <li>
            <Link to="join" smooth={true} duration={1000}>Admin</Link>
            </li>
          </ul>

          <ul className="icons">
            <li >
              <img src={facebook} alt="" />
            </li>
            <li >
              <img src={instagram} alt="" />
            </li>
            <li >
              <img src={youtube} alt="" />
            </li>
            <li >
              <img src={twitter} alt="" />
            </li>
          </ul>
        </nav>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Menu</button>
        <div class="dropdown-content">
          <a href="about">About</a>
          <a href="contact">Contact</a>
          <a href="Admin">Admin</a>
        </div>
      </div>

      <div class="dropdown2">
        <button class="dropbtn2">Connect with Us</button>
        <div class="dropdown-content2">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={youtube} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>

      

    </header>
  );
}

export default Navbar;
