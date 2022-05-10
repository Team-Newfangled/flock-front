import React from "react";
import { ReactComponent as FooterLogo } from '../images/footerLogo.svg';
import '../styles/Footer.scss';

const Footer = () => {
  return(
    <footer>
      <div className="footerLogo">
        <FooterLogo />
      </div>
    </footer>
  )
}

export default Footer;