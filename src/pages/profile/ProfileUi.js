import React from "react";
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

        </div> 
      </div>
    </>
  );
};

export default ProfileUi;