import React, { useCallback } from "react";
// import GoogleLogin from "react-google-login";
import { ReactComponent as Logo } from '../../images/Logo.svg';
import '../../styles/login.scss';

const Login = ({loginClick}) => {

  const REACT_APP_GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const REACT_APP_GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

  const SCOPE = "openid";

  const onLoginSuccess = (response) => {
    console.log(response)
  }

  const onLoginFail = (response) => {
    console.log(response)
  }

  const gitLogin = useCallback(() => {
    const url = `https://github.com/login/oauth/authorize?client_id=${REACT_APP_GITHUB_API_KEY}&scope=id,name,email,avatar_url`;
    window.open(url);
  }, [REACT_APP_GITHUB_API_KEY]);

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
          {/* <GoogleLogin 
            clientId={REACT_APP_GOOGLE_API_KEY}
            render={renderProps => (
              <button onClick={renderProps.onClick} className="googleLogin"><img className="oauthLogo" alt="googleLogo" src={require('../../images/google.svg').default} /><span>구글로 계속하기</span></button>
            )}
            buttonText="구글로 계속하기"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFail}
            cookiePolicy={"single_host_origin"}
            scope={SCOPE}
          /> */}
          <button className="githubLogin" onClick={gitLogin}>
            <img className="oauthLogo" alt="githubLogo" src={require('../../images/github.svg').default}/>
            <span>깃허브로 계속하기</span>
          </button>
          <span className="loginFnt">소셜계정을 통해 간편하게 로그인 하세요!</span>
        </div>
      </>
  );
};

export default Login;