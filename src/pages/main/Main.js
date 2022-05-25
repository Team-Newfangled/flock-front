import React from "react";
import "../../styles/main.scss";
import "../../styles/css/main-slide.css";
import Scroll from '../../components/Scroll/scroll';
import Layout from "./Layout";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";

const Main = () => {
  
  const scroll = Scroll();

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