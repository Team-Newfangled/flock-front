import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputForm from './InputForm';
import '../../styles/Profile.scss'
import { editProfile } from "../../store/users/editProfile";

const ProfileUi = () => {
  const user = useSelector((state) => state.user.value.userInfo);
  const dispatch = useDispatch();
  const [allChange, setAllChange] = useState(0);
  const [image, setImage] = useState("");
  const [nickname, setNickName] = useState("");
  const [company, setCompany] = useState("");

  const onLoadFile = (e) => {
    const {target: {files},} = e;
    console.log(files)
    const theFile = files[0];
    const reader = new FileReader();

    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: {result},
      } = finishedEvent;
      setImage(result)
      console.log(result)
    }
    reader.readAsDataURL(theFile);
  }

  const changeClick = () => {
    if(allChange === 2){
      if(nickname === "" || company === ""){
        return alert('변경할 내용을 입력해주세요.') 
      }  
    }else {
      if(nickname === "" && company === ""){
        return alert('변경할 내용을 입력해주세요.') 
      }
    }
    dispatch(editProfile({nickname, image, company}));
    window.location.replace('/Profile')
  };

  return (
    <div>
      <div className="h1Box">
          <h1>내 정보</h1>
      </div>
      <div className="profile">
        <div className="profileBox">
          <div className="imgWrap">
            <img className='profileImg' src={image || user.image || require('../../images/myProfile.svg').default} alt="프로필"/>
          </div>
          <div className="fileInputBox">
            <label htmlFor="file_input" style={{cursor: 'pointer'}}>
              <img src={require('../../images/Wrench.svg').default} alt="편집"/>
            </label>
            <input type="file" id="file_input" onChange={onLoadFile} style={{display : 'none'}}/>
          </div>
          <div className="inputarea">
            <InputForm 
                   setAllChange={setAllChange} 
                   allChange={allChange}
                   name="닉네임" 
                   onChange={setNickName}
                   item={nickname}
                   value={user.nickname}
                   changeClick={changeClick} 
            />
            <InputForm 
                   setAllChange={setAllChange} 
                   allChange={allChange}
                   name="소속"
                   onChange={setCompany}
                   item={company}
                   value={user.company}
                   changeClick={changeClick} 
            />
            {allChange === 2 ? <button className="allChange" onClick={changeClick}>모두 변경</button> : null}
          </div>
        </div> 
      </div>
    </div>
  );
};

export default ProfileUi;