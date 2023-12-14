import React, { useState } from "react";
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <>
    
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="app-logo" />
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans">
        {" "}
        <a href="#home">Home</a>{" "}
      </li>
      <li className="p__opensans">
        <a href="#about">About</a>
      </li>
      <li className="p__opensans">
        <a href="#menu">Menu</a>
      </li>
      <li className="p__opensans">
        <a href="#awards">Awards</a>
      </li>
      <li className="p__opensans">
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" id="login1" className="p__opensans">
        Log In/Register
      </a>
      {/* <div/>  this div is empty div for creating space */}
      <div> </div>
      <a href="/" id="Book_table" className="p__opensans">
        Book Table
      </a>
    </div>
    <div className="app__navbar-smallscreen">
      {/* this is for GiHamburgerMenu */}
      <GiHamburgerMenu onClick={() => setToggleMenu(true)} size={27} style={{color:'white'}}/>
      

      { toggleMenu &&(
         <div className="app__navbar-smallscreen_overlay flex__center slide-buttom">
         <MdOutlineRestaurantMenu onClick={() => setToggleMenu(false)} className="overlay__close" size={27}/>
      
         <ul className="app__navbar-smallscreen_links">
           <li className="p__opensans">
             {" "}
             <a href="#home">Home</a>{" "}
           </li>
           <li className="p__opensans">
             <a href="#about">About</a>
           </li>
           <li className="p__opensans">
             <a href="#menu">Menu</a>
           </li>
           <li className="p__opensans">
             <a href="#awards">Awards</a>
           </li>
           <li className="p__opensans">
             <a href="#contact">Contact</a>
           </li>
         </ul>
       </div>
      )
      }


     


    </div>
  </nav>

    </>
  )
}

export default Navbar;
