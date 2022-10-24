import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import Login from "../login/Login";
import Scroll from "../common/Scroll/scroll";
import { ReactComponent as Logo } from '../../images/Logo.svg';
import { userlogout } from "../../store/users/userData";
import '../../styles/Header.scss';

const Header = () => {
  const isLogin = useLogin();
  const [isPopup, setIsPopup] = useState(false);
  const [isMyModal, setIsMyModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const scroll = Scroll();

  const loginClick = () => {
    setIsPopup(!isPopup);
    !isPopup ? document.body.style.overflow = "hidden": document.body.style.overflow = "unset";
  } 

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_id');
    setIsMyModal(prev => !prev)
    dispatch(userlogout);
    navigate('/')
  }

  return(
    <header className={scroll > 3.5 ? 'head-up' : null}>
      <div className="logo" onClick={() => navigate('/')}>
        <Logo />
      </div>
        <div className="nav">
          <div className="nav-link">
            <NavLink to='/CreateTeam'>프로젝트</NavLink>
          </div>
          <span className="line"/>
          <div className="nav-link">
            {isLogin ?  
              <button className="button-my" onClick={() => setIsMyModal(prev => !prev)}>내 정보</button> 
              : 
              <button className="button-my" onClick={loginClick}>로그인</button>
            }
          </div>
        {isMyModal ? 
          <div className="my-nav">
            <div className="my-nav-form">
              <div className="aa">
                <button className="nav-btn" onClick={() => navigate('/Profile')}>내 프로필</button>
                <button className="nav-btn" onClick={logout}>로그아웃</button>
              </div>
            </div>
          </div>
          : null
        }
        </div>
      {isPopup ? <Login loginClick={loginClick}/> : null}
    </header>
  )
}

export default Header;