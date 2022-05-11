import React from "react";
import { ReactComponent as FooterLogo } from '../images/footerLogo.svg';
import '../styles/Footer.scss';

const Footer = () => {
  return(
    <footer>
      <div className="footerLogo">
        <FooterLogo />
      </div>
      <div className="footerP">
        <p>Addr. 대구광역시 달성군 구지면 창리로 11길 93</p>
        <p>e-mail. dgsw@dgsw.hs.kr</p>
        <p>대구 소프트웨어 마이스터 고등학교</p>
        <p> NEWFANGLED</p>
      </div>
    </footer>
  )
}

export default Footer;