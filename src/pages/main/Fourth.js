import React from "react";

const Fourth = (props) => {
  return (
    <>
      <div className="fourth">
        <div className="mainBg">
          <img className={ props.scroll >= 65? 'mainText7 after-mid1': 'mainText7' } src={require('../../images/mainText7.svg').default} alt="체크리스트"/>
          <img className={ props.scroll >= 65? 'mainText8 after-mid2': 'mainText8' } src={require('../../images/mainText8.svg').default} alt="더욱 간편하게 프로젝트를 수행하세요"/>
          <img className="calenderImg" src={require('../../images/calender.svg').default} alt="할 일"/>
          <img className="termImg" src={require('../../images/term.svg').default} alt="할 일"/>
        </div>  
      </div>
    </>
  );
};

export default Fourth;