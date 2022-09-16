import React, { useCallback } from "react";

const GitHubLoginButton = () =>{
  const REACT_APP_GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

  const gitLogin = useCallback(() => {
    const url = `https://github.com/login/oauth/authorize?client_id=${REACT_APP_GITHUB_API_KEY}&scope=id,name,email,avatar_url`;
    window.open(url);
  }, [REACT_APP_GITHUB_API_KEY]);

  return(
    <>
      <button className="githubLogin" onClick={gitLogin}>
        <img className="oauthLogo" alt="githubLogo" src={require('../../images/github.svg').default}/>
        <span>깃허브로 계속하기</span>
      </button>
    </>
  )
};

export default GitHubLoginButton;