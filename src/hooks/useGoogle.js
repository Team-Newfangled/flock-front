import { useEffect } from "react";
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

  useEffect(() => {
    (async () => {
      if(window.location.search.split('?').length > 1){
        console.log(window.location.search.split('?')[1])
        const { code, scope } = qs.parse(window.location.search.split('?')[1])

        console.log(code);
        console.log(scope);
      }
    })();
  }, [])

  return{
    loginUrl: AUTHORIZE_URI + "?" + loginQueryString
  }
};

export default useGoogle;