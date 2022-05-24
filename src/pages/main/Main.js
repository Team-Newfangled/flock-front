import React, { useState, useEffect } from "react";
import "../../styles/main.scss";
import "../../styles/css/main-slide.css";
import Layout from "./Layout";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";

const Main = () => {
  const [scroll, setScroll] = useState(0);

  const handle = () => {
    setScroll(window.pageYOffset / (document.body.scrollHeight - window.innerHeight) * 100);
  }

  useEffect(() => {
    console.log(scroll);
  },[scroll])

  useEffect(() => {
    window.addEventListener('scroll', handle);

    return () => {
      window.removeEventListener('scroll', handle)
    }
  })

  return(
    <Layout>
      <First />
      <Second />
      <Third />
      <Fourth /> 
    </Layout>
  );
};

export default Main;