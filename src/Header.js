import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss'

const Header = () => {
  function toggleBurgerMenu() {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }


    return (
    <nav class = 'navbar' role="navigation" aria-label="main navigation">

         <div class='navbar-brand'>
            <a class = 'navbar-item'>
              {/* icon */}
            </a>
          
        <a role="button" className="navbar-burger " aria-label="menu" aria-expanded="false"
          onClick={toggleBurgerMenu}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
          </div>

            <div class='navbar-menu' id = 'nav-links'>
               <div class="navbar-start navbar-item">< Link to= {"/"}> Home </Link></div> 
               <div class="navbar-start navbar-item"><Link to= {"/Aboutme"}> About me </Link></div> 
               <div class="navbar-start navbar-item"> <Link to={"/Projects"}> portfolio </Link></div>   
            </div>
             {/* <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
             <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              </a> */}
               
    </nav>
  )
}

export default Header;