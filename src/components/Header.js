import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./login/Login";
import { ReactComponent as Logo } from '../images/Logo.svg';
import '../styles/Header.scss';

const Header = () => {

  const [isPopup, setIsPopup] = useState(0);

  const loginClick = () => {
    setIsPopup(!isPopup);
    !isPopup ? document.body.style.overflow = "hidden": document.body.style.overflow = "unset";
  } 

  return(
    <div>
      <header>
        <div className="logo">
        <NavLink to='/'><Logo /></NavLink>
        </div>
        <div className="nav">
          <div className="nav-link">
            <NavLink to='/'>프로젝트</NavLink>
          </div>
          <div className="nav-link">
            <NavLink to='/'>SNS</NavLink>
          </div>
          <span className="line"/>
          <div className="nav-link">
            <button className="button-my" onClick={loginClick}>로그인</button>
          </div>
        </div>
      </header>
      {isPopup ? <Login loginClick={loginClick}/> : ''}
    </div>
  )
}

export default Header;