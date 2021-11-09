import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss'

const Header = () => {
    return (
    <div className = 'navibar'>

         <div className='navbar-brand'>

             <nav className ='main-header'> 
                <Link to= {"/"}> Home </Link>
                <Link to= {"/Aboutme"}> About me </Link>
                <Link to={"/Projects"}> portfolio </Link>
                </nav> 
            </div>
    </div>
  )
}

export default Header;