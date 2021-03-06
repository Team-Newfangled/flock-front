import React from "react";

const First = (props) => {
  return (
    <>
      <div className="first">
        <div className="mainImage">
          <img className='mainText1 after-left' src={require('../../images/mainText1.svg').default} alt="끼리끼리"/>
          <img className='mainText2 after-left' src={require('../../images/mainText2.svg').default} alt="빠르고, 편리한 협업을 실행해보세요"/>
          <button className="startButton"/>
        </div>  
      </div>
    </>
  );
};

export default First;