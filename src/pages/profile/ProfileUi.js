import React from "react";
import Input from './Input';
import '../../styles/Profile.scss'

const ProfileUi = () => {
  return (
    <>
      <div className="h1Box">
          <h1>내 정보</h1>
      </div>
      <div className="profile">
        <div className="profileBox">
          <img className='profileImg' src={require('../../images/myProfile.svg').default} alt="프로필"/>
          <input type="file" className="editButton"/>
          <img src={require('../../images/Wrench.svg').default} alt="편집"/>
          <div className="inputarea">
            <Input divClassName='inputArea1' className='input1 bg' label='닉네임'/>
            <Input divClassName='inputArea2' className='input2 bg' label='소속'/>
          </div>
        </div> 
      </div>
    </>
  );
};

export default ProfileUi;