import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Scroll from "../common/Scroll/scroll.js";
import Team from "../../pages/createTeam/Team.js";
import { ReactComponent as Logo } from '../../images/Logo.svg';
import '../../styles/Header.scss';

const Header = () => {
  const [isPopup, setIsPopup] = useState(false);
  const scroll = Scroll();

  const teamClick = () => {
    setIsPopup(!isPopup);
    !isPopup ? document.body.style.overflow = "hidden": document.body.style.overflow = "unset";
  } 

  return(
    <header className={scroll > 3.5 ? 'head-up' : null}>
      <div className="logo">
      <NavLink to='/'><Logo /></NavLink>
      </div>
      <div className="nav">
        <button className="teamBtn" onClick={teamClick}>팀만들기</button>
      </div>
      {isPopup ? <Team teamClick={teamClick}/> : ''}
    </header>
  )
}

export default Header;