import qs from "qs";

const AUTHORIZE_URI = "https://accounts.google.com/o/oauth2/v2/auth";

const useGoogle = ({clientId}) => {
  const redirect_uri = "http://localhost:3000/redirect";
  const loginQueryString = qs.stringify({
    client_id: clientId,
    redirect_uri,
    response_type: 'code',
    scope: 'https://www.googleapis.com/auth/userinfo.profile' 
  });

  return{
    loginUrl: AUTHORIZE_URI + "?" + loginQueryString
  }
};

export default useGoogle;