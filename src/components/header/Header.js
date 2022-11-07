import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import Login from "../login/Login";
import Scroll from "../common/Scroll/scroll";
import { ReactComponent as Logo } from '../../images/Logo.svg';
import { userlogout } from "../../store/users/userData";
import '../../styles/Header.scss';
import { dropModal, showModal } from "../../store/modal/modalData";

const Header = () => {
  const isLogin = useLogin();
  const [isMyModal, setIsMyModal] = useState(false);
  const isModal = useSelector((state) => state.modal.show);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const scroll = Scroll();

  const loginClick = () => {
    if(isModal){
      dispatch(dropModal());
    }else {
      dispatch(showModal());
    }
    !isModal ? document.body.style.overflow = "hidden": document.body.style.overflow = "unset";
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
      <div className="logo" onClick={() => {isLogin ? navigate('/CreateTeam') : navigate('/')}}>
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
      {isModal && <Login loginClick={loginClick}/>}
    </header>
  )
}

export default Header;