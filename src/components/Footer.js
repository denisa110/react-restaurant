import React from 'react';
import Logo from '../assets/logo.png';
import { BsInstagram } from 'react-icons/bs';
import { ImFacebook, ImLinkedin } from 'react-icons/im';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <img src={Logo} alt='logo' />
      <div className='socialMedia'>
        <BsInstagram />
        <ImFacebook />
        <ImLinkedin />
      </div>
      <p> &copy; 2023 andalu.poloniq.ro </p>
      <hr/>
      <div className='detaliiFirma'>
        <p> Nume firma: SC LALOCA13 SRL </p>
        <p> C.U.I: RO40171204 </p>
        <p> Registrul comerțului: J22/2131/2018 </p>
        <p> Sediul social: Strada Codrescu nr.6, Iași </p>
        <p> Cont: 57INGB12369857420000 </p>
      </div>
    </div>
  )
}

export default Footer
