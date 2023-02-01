import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/Navbar.css';

function Navbar() {

  return (
    <div className='nav1'>
      <div className="leftSide" >
        <img src={Logo} alt='Logo' />
      </div>
      <div className='rightSide'>
        <Link to="/" className='items'> Acasa </Link>
        <Link to="/meniu" className='items'> Meniu </Link>
        <Link to="/despre-noi" className='items'> Despre </Link>
        <Link to="/rezervari" className='items'> Rezervari </Link>
        <Link to="/cart">
          <button id='cart'> <FaShoppingCart /> </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
