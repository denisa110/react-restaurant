import React from 'react';
import { BsInstagram } from  'react-icons/bs';
import { ImFacebook } from  'react-icons/im';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
        <BsInstagram />
        <ImFacebook />
         </div>
        <p> &copy; 2023 andalu.poloniq.ro </p>
    </div>
  )
}

export default Footer
