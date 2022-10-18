import React from "react";
import Img from "../../../images/404.png";

const NotFound = () => {
  return (
    <div>
      <img src={Img} alt="404Not Fount" style={{width: "100vw", height: "100vh"}}/>
    </div>
  );
};

export default NotFound;