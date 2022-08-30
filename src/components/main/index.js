import React,{ useEffect } from "react";
import qs from "qs";
import "../../styles/main.scss";
import "../../styles/css/main-slide.css";
import Scroll from "../common/Scroll/scroll";
import Layout from "./Layout";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import { login } from "../../util/api/user";

const Main = () => {
  const scroll = Scroll();
  
  useEffect(() => {
    (async () => {
      if(window.location.search.split('?').length > 1){
        console.log(window.location.search.split('?')[1])
        const { code, scope } = qs.parse(window.location.search.split('?')[1])

        console.log(code);
        console.log(scope);

        const { data } = await login(code);
        const access_token = data.access_token;
        console.log(access_token); 
        if(data.refresh_token){
          localStorage.setItem('refresh_token', data.refresh_token);
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