import React, { useState } from "react";
import Input from './Input';
import '../../styles/Profile.scss'

const ProfileUi = () => {
  const [allChange, setAllChange] = useState(0);
  const [files, setFiles] = useState('');

  const onLoadFile = e => {
    const file = e.target.files;
    console.log(file)
    setFiles(file)
  }

  return (
    <>
      <div className="h1Box">
          <h1>내 정보</h1>
      </div>
      <div className="profile">
        <div className="profileBox">
          <img className='profileImg' src={require('../../images/myProfile.svg').default} alt="프로필"/>
          <input type="file" className="editButton" onChange={onLoadFile}/>
          <img src={require('../../images/Wrench.svg').default} alt="편집"/>
          <div className="inputarea">
            <Input setAllChange={setAllChange} 
                   allChange={allChange} 
                   divClassName='inputArea1' 
                   className='input1 bg' 
                   label='닉네임'/>
            <Input setAllChange={setAllChange} 
                   allChange={allChange} 
                   divClassName='inputArea2' 
                   className='input2 bg' 
                   label='소속'/>
            {allChange === 2 ? <button className="allChange">모두 변경</button> : null}
          </div>
        </div> 
      </div>
    </>
  );
};

export default ProfileUi;