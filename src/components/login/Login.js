import React from "react";
import GoogleLoginButton from "./GoogleLoginButton";
import { ReactComponent as Logo } from '../../images/Logo.svg';
import '../../styles/login.scss';
import GitHubLoginButton from "./GitHubLoginButton";

const Login = ({loginClick}) => {
  return (
    <>
      <div className="bg" onClick={loginClick}>
      </div>
        <div className="login">
          <button className="close" onClick={loginClick}>
            <img alt="close" src={require('../../images/Close.svg').default}/>
          </button>
          <div className="loginLogo">
            <Logo />
          </div>
          <h2>로그인</h2>
          <GoogleLoginButton />
          {/* <GitHubLoginButton /> */}
          <span className="loginFnt">소셜계정을 통해 간편하게 로그인 하세요!</span>
        </div>
      </>
  );
};

export default Login;