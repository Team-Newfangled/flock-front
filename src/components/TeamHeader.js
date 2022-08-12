import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from '../images/Logo.svg';
import '../styles/Header.scss';
import Scroll from "./Scroll/scroll";
import Team from "../pages/createTeam/Team.js";

const Header = () => {
  const [isPopup, setIsPopup] = useState(false);
  const scroll = Scroll();

  const teamClick = () => {
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
          <button className="teamBtn" onClick={teamClick}>팀만들기</button>
        </div>
      </header>
      {isPopup ? <Team teamClick={teamClick}/> : ''}
    </div>
  )
}

export default Header;