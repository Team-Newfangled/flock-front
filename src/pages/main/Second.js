import React from "react";

const Second = () => {
  return (
    <>
      <div className="second">
        <div className="mainBg">
          <img className="loginImg" src={require('../../images/login.svg').default} alt="로그인"/>
          <img className="mainText3" src={require('../../images/mainText3.svg').default} alt="OAUTH"/>
          <img className="mainText4" src={require('../../images/mainText4.svg').default} alt="간편하게 로그인 후 서비스를 이용하세요"/>
          <button className="startButton2"/>
        </div>  
      </div>
    </>
  );
};

export default Second;