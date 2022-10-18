import React from "react";
import Calendar from "../../images/calender.png";
import Term from "../../images/term.png";

const Fourth = (props) => {
  return (
    <>
      <div className="fourth">
        <div className="mainBg">
          <img className={ props.scroll >= 65? 'mainText7 after-mid1': 'mainText7' } src={require('../../images/mainText7.svg').default} alt="체크리스트"/>
          <img className={ props.scroll >= 65? 'mainText8 after-mid2': 'mainText8' } src={require('../../images/mainText8.svg').default} alt="더욱 간편하게 프로젝트를 수행하세요"/>
          <img className="calenderImg" src={Calendar} alt="할 일"/>
          <img className="termImg" src={Term} alt="할 일"/>
        </div>  
      </div>
    </>
  );
};

export default Fourth;