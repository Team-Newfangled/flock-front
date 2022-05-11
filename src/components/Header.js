import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from '../images/Logo.svg';
import '../styles/Header.scss';

const Header = () => {
  return(
    <header>
      <div className="logo">
        <Logo />
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
          <button button className="button-my">로그인</button>
        </div>
      </div>
    </header>
  )
}

export default Header;