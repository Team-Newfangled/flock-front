import React from "react";
import Scroll from "../common/Scroll/scroll";
import Layout from "./Layout";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import "../../styles/main.scss";
import "../../styles/css/main-slide.css";


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