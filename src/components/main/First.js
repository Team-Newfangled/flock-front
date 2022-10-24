import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { showModal } from "../../store/modal/modalData";

const First = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useLogin();

  const handleStart = () => {
    if(isLogin){
      navigate('/CreateTeam');
    }else {
      dispatch(showModal());
    }
  };

  return (
    <>
      <div className="first">
        <div className="mainImage">
          <img className='mainText1 after-left' src={require('../../images/mainText1.svg').default} alt="끼리끼리"/>
          <img className='mainText2 after-left' src={require('../../images/mainText2.svg').default} alt="빠르고, 편리한 협업을 실행해보세요"/>
          <button className="startButton" onClick={handleStart}/>
        </div>  
      </div>
    </>
  );
};

export default First;