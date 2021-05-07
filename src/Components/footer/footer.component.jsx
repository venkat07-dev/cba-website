import React from "react";
import "./footer.style.css";
import facebook from "../footer/Footer/fb2.png";
import instagram from "../footer/Footer/insta 2.png";
import twitter from "../footer/Footer/twitter2.png";
import youtube from "../footer/Footer/YT2.png";

import favicon from "../navbar/Navbar/favicon.ico";
import { animateScroll as scroll } from "react-scroll";


function Footer() {

    function Facebook(){

        window.open("https://www.facebook.com/", "_blank");
    
      }
    
      function Twitter(){
    
       window.open('https://twitter.com/', "_blank");
      }
    
      function Insta(){
    
       window.open("https://www.instagram.com/", "_blank");
    
      }
    
      function Youtube(){
    
       window.open("https://www.youtube.com/", "_blank");
    
      }

    return(
        
        <footer  id="footer">
            <p href="home" className="logo2" onClick={() => scroll.scrollToTop()}>CBA</p>
            < img className="logoicon2" src={favicon} alt="" />
            <p className="dev">© 2021 All rights reserved. Developed by <a className="QClink" href="https://www.quartciphers.in/" target="_blank" rel="noreferrer">QuartCiphers</a>.</p>
            
            <ul className="icons2">
                <li>
                    <img className="social-media-icon" src={facebook} alt="" onClick={Facebook}  />
                </li>
                <li>
                    <img className="social-media-icon" src={instagram} alt="" onClick={Insta}/>
                </li>
                <li>
                    <img className="social-media-icon" src={twitter} alt="" onClick={Twitter} />
                </li>
                <li>
                    <img className="social-media-icon" src={youtube} alt="" onClick={Youtube}/>
                </li>
                </ul>

                <div className="dropdown3">
                    <button className="dropbtn3">Connect with us</button>
                    <div className="dropdown-content3">
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={youtube} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                </div>
                <div>
     
    </div>
        </footer>
        
    );
}

export default Footer;
