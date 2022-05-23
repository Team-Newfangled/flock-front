import React from "react";
import "../../styles/main.scss";
import Layout from "./Layout";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";

const Main = () => {
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