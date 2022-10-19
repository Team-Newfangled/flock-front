import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { login } from "../../../util/api/user";
import { userlogin } from "../../../store/users/userData";
import Img from "../../../images/Loading.png";

const Loding = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      if(window.location.search.split('?').length > 1){
        const { code } = qs.parse(window.location.search.split('?')[1])
        await login(code)
        .then((res) => {
          if(res.data){
            localStorage.setItem('access_token', res.data.access_token);
            localStorage.setItem('refresh_token', res.data.refresh_token);
            localStorage.setItem('user_id', res.data.user_id);

            dispatch(userlogin(res.data));
          }
          navigate('/');      // re-rendering 방지
        })
        .catch((err) => {
          console.log(err)
        })
         
      }
    })();
  }, [])
  return (
    <div>
      <img src={Img} alt="404Not Fount" style={{width: "100vw", height: "100vh"}}/>
    </div>
  );
};

export default Loding;