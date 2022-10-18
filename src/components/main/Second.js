import React from "react";
import Login from '../../images/login.png'

const Second = (props) => {
  return (
    <>
      <div className="second">
        <div className="mainBg">
          <img className="loginImg" src={Login} alt="로그인"/>
          <img className={ props.scroll >= 10 && props.scroll <= 46 ? 'mainText3 after-right': 'mainText3' } src={require('../../images/mainText3.svg').default} alt="OAUTH"/>
          <img className={ props.scroll >= 10 && props.scroll <= 46 ? 'mainText4 after-right': 'mainText4' } src={require('../../images/mainText4.svg').default} alt="간편하게 로그인 후 서비스를 이용하세요"/>
          <button className="startButton2"/>
        </div>  
      </div>
    </>
  );
};

export default Second;