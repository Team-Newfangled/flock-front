import React from "react";

const Third = (props) => {
  return (
    <>
      <div className="third">
        <div className="mainBg">
          <img className={ props.scroll >= 40 && props.scroll <= 80? 'mainText5 after-left': 'mainText5' } src={require('../../images/mainText5.svg').default} alt="체크리스트"/>
          <img className={ props.scroll >= 40 && props.scroll <= 80? 'mainText6 after-left': 'mainText6' } src={require('../../images/mainText6.svg').default} alt="더욱 간편하게 프로젝트를 수행하세요"/>
          <img className="chListIma" src={require('../../images/checkList.svg').default} alt="할 일"/>
        </div>  
      </div>
    </>
  );
};

export default Third;