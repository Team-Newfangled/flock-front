import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Scroll from "../common/Scroll/scroll.js";
import Team from "../../pages/createTeam/Team.js";
import { ReactComponent as Logo } from '../../images/Logo.svg';
import '../../styles/Header.scss';

const Header = () => {
  const [isPopup, setIsPopup] = useState(false);
  const navigate = useNavigate();
  const scroll = Scroll();

  const teamClick = () => {
    setIsPopup(!isPopup);
  } 

  return(
    <header className={scroll > 3.5 ? 'head-up' : null}>
      <div className="logo" onClick={() => navigate('/')}>
        <Logo />
      </div>
      <div className="navButton">
        <button className="teamBtn" onClick={teamClick}>팀만들기</button>
      </div>
      {isPopup ? <Team teamClick={teamClick}/> : ''}
    </header>
  )
}

export default Header;