import React from "react";
import "../../styles/main.scss";
import Layout from "./Layout";

const Main = () => {
  return(
    <Layout>
      <div className="first">
        <div className="mainImage">
          <img className="mainText1" src="../../images/mainText1.svg"></img>
        </div>
      </div>
    </Layout>
  );
};

export default Main;