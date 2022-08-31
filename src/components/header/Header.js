import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Login from "../login/Login";
import Scroll from "../common/Scroll/scroll";
import { ReactComponent as Logo } from '../../images/Logo.svg';
import '../../styles/Header.scss';

const Header = () => {
  const isLogin = () => !!localStorage.getItem('access_token');
  const [isPopup, setIsPopup] = useState(false);
  const [isMyModal, setIsMyModal] = useState(false);
  const scroll = Scroll();

  const loginClick = () => {
    setIsPopup(!isPopup);
    !isPopup ? document.body.style.overflow = "hidden": document.body.style.overflow = "unset";
  } 

  return(
    <header className={scroll > 3.5 ? 'head-up' : null}>
      <div className="logo">
      <NavLink to='/'><Logo /></NavLink>
      </div>
      <div className="nav-form">
        <div className="nav">
          <div className="nav-link">
            <NavLink to='/CreateTeam'>프로젝트</NavLink>
          </div>
          <div className="nav-link">
            <NavLink to='/'>SNS</NavLink>
          </div>
          <span className="line"/>
          <div className="nav-link">
            {!isLogin() ?  
              <button className="button-my" onClick={() => setIsMyModal(prev => !prev)}>내 정보</button> 
              : 
              <button className="button-my" onClick={loginClick}>로그인</button>
            }
          </div>
          { isMyModal ? 
            <div className="my-nav">

            </div>
            : null
          }
        </div>
      </div>
      {isPopup ? <Login loginClick={loginClick}/> : ''}
    </header>
  )
}

export default Header;