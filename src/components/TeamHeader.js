import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./login/Login";
import { ReactComponent as Logo } from '../images/Logo.svg';
import '../styles/Header.scss';
import Scroll from "./Scroll/scroll";

const Header = () => {
  const [isPopup, setIsPopup] = useState(false);
  const scroll = Scroll();

  const loginClick = () => {
    setIsPopup(!isPopup);
    !isPopup ? document.body.style.overflow = "hidden": document.body.style.overflow = "unset";
  } 

  return(
    <div>
      <header className={scroll > 3.5 ? 'head-up' : null}>
        <div className="logo">
        <NavLink to='/'><Logo /></NavLink>
        </div>
        <div className="nav">
          <button className="teamBtn">팀만들기</button>
        </div>
      </header>
      {isPopup ? <Login loginClick={loginClick}/> : ''}
    </div>
  )
}

export default Header;