import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/Navbar.css';


function Navbar() {
  

  return (
    <div className='nav1'>
      <div className='leftSide'>
        <img src={Logo} alt='Logo'/>
      </div>
      <div className='rightSide'>
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/rezervari"> Rezervari </Link>
        <Link to="/cart">     
         <button id='cart'> <FaShoppingCart /> </button>
        </Link>

      </div>

    </div>
  )
}

export default Navbar
