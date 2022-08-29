import useGoogle from "../../hooks/useGoogle";

const GoogleLoginButton = () => {
  const REACT_APP_GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  const { loginUrl } = useGoogle({clientId: REACT_APP_GOOGLE_API_KEY})

  return(
    <>
      <a href={loginUrl} >
        <button className="googleLogin">
          <img className="oauthLogo" alt="googleLogo" src={require('../../images/google.svg').default} />
          <span>구글로 계속하기</span>
        </button>
      </a>
    </>
  )
}

export default GoogleLoginButton;