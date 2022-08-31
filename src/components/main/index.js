import React,{ useEffect } from "react";
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

const Main = () => {
  const dispatch = useDispatch();
  const scroll = Scroll();

  useEffect(() => {
    (async () => {
      if(window.location.search.split('?').length > 1){
        const { code } = qs.parse(window.location.search.split('?')[1])
        const { data } = await login(code);
        if(data){
          localStorage.setItem('access_token', data.access_token);
          localStorage.setItem('refresh_token', data.refresh_token);
          authAPI.get(`users/${data['user-id']}`)
          .then(res => {
            dispatch(userlogin(res.data));
          })
        } 
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