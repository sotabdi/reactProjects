import React from 'react';
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Menulist from '../../CommonComponents/Menulist';
import Logo from '../../assets/Logo.png';
import './Footer.css';

function Footer() {
  return (
    <div id='footerFull'>
        <div className="container">
            <div className="footer">
            <div className="footerLeft">
                <picture>
                    <img src={Logo} alt="Logo" />
                </picture>
                <div className="footerLeft__para">
                There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
                </div>
                <div className="footerLeft__icons">
                    <span><FaFacebookF/></span>
                    <span><FaTwitter/></span>
                </div>
            </div>
            <div className="footerRight">
                <Menulist head={'Company'} items={['About us','Work','Letest News','Carrer']}/>
                <Menulist head={'Product'} items={['About us','Work','Letest News','Carrer']}/>
                <Menulist head={'Support'} items={['About us','Work','Letest News','Carrer']}/>
                <Menulist head={'Contact'} items={['About us','Work']}/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;