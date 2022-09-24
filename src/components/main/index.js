import React,{ useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import qs from "qs";
import Scroll from "../common/Scroll/scroll";
import Layout from "./Layout";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import { login } from "../../util/api/user";
import { userlogin } from "../../store/users/userData";
import "../../styles/main.scss";
import "../../styles/css/main-slide.css";


const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const scroll = Scroll();

  useEffect(() => {
    (async () => {
      if(window.location.search.split('?').length > 1){
        const { code } = qs.parse(window.location.search.split('?')[1])
        const { data } = await login(code);
        dispatch(userlogin(data));
         
        navigate('/');      // re-rendering 방지
      }
    })();
  }, [])

  return(
    <Layout>
      <First scroll={scroll}/>
      <Second scroll={scroll}/>
      <Third scroll={scroll}/>
      <Fourth scroll={scroll}/> 
    </Layout>
  );
};

export default Main;