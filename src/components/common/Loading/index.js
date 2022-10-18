import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { login } from "../../../util/api/user";
import { userlogin } from "../../../store/users/userData";
import Img from "../../../images/404.png";

const Loding = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      if(window.location.search.split('?').length > 1){
        const { code } = qs.parse(window.location.search.split('?')[1])
        const { data } = await login(code);
        console.log(data)
        dispatch(userlogin(data));
         
        navigate('/');      // re-rendering 방지
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