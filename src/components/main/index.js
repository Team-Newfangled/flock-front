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
import { authAPI } from "../../lib/API";
import { userlogin } from "../../store/users/userData";
import "../../styles/main.scss";
import "../../styles/css/main-slide.css";
import useLogin from "../../hooks/useLogin";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useLogin();
  const scroll = Scroll();

  const getUser = (data) => {
    authAPI.get(`users/${data.user_id}`)
    .then(res => {
      dispatch(userlogin(res.data));
    })
  }

  useEffect(() =>{
    if(isLogin){
      getUser(localStorage.getItem('user_id'));
    }
  }, [])

  useEffect(() => {
    (async () => {
      if(window.location.search.split('?').length > 1){
        const { code } = qs.parse(window.location.search.split('?')[1])
        const { data } = await login(code);
        
        if(data){
          localStorage.setItem('access_token', data.access_token);
          localStorage.setItem('refresh_token', data.refresh_token);
          localStorage.setItem('user_id', data.user_id);
        } 
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