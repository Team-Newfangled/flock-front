import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputForm from './InputForm';
import '../../styles/Profile.scss'
import axios from "axios";
import { authAPI } from "../../lib/API";

const ProfileUi = () => {
  const user = useSelector((state) => state.user.value)
  const [allChange, setAllChange] = useState(0);
  const [file, setFile] = useState(user.image);
  const [name, setName] = useState(user.nickname);
  const [organizaion, setOrganizaion] = useState(user.company);

  const onLoadFile = e => {
    const {target: {files},} = e;
    console.log(files)
    const theFile = files[0];
    const reader = new FileReader();

    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: {result},
      } = finishedEvent;
      setFile(result)
      console.log(result)
    }
    reader.readAsDataURL(theFile);
  }

  const patchFile = () => {
    const formdata = new FormData();
    formdata.append('uploadImage,', file);

    const config = {
      Headers: {
        'content-type': 'multipart/form-data',
      },
    };
    
    return authAPI.patch(`users/{user-id}/picture`, formdata, config);
  }

  const patchName = () => {
    return authAPI.patch(`users/{user-id}/name`,{
      name: name,
    })
  }

  const patchOrganizaion = () => {
    console.log()
    return authAPI.patch(`users/{user-id}/organizaion`,{
      name: organizaion,
    })
  }

  const changeClick = async(e) => {
    e.preventDefault();
    await axios.all([patchFile(), patchName(), patchOrganizaion()])
      .then(axios.spread(function (file, name, organ) {
        console.log(file, name, organ);
      }))
  }

  return (
    <div>
      <div className="h1Box">
          <h1>내 정보</h1>
      </div>
      <div className="profile">
        <div className="profileBox">
          <div className="imgWrap">
            <img className='profileImg' src={file || require('../../images/myProfile.svg').default} alt="프로필"/>
          </div>
          <div className="fileInputBox">
            <label htmlFor="file_input" style={{cursor: 'pointer'}}>
              <img src={require('../../images/Wrench.svg').default} alt="편집"/>
            </label>
            <input type="file" id="file_input" onChange={onLoadFile} style={{display : 'none'}}/>
          </div>
          <div className="inputarea">
            <InputForm setAllChange={setAllChange} 
                   allChange={allChange}
                   name="닉네임" 
                   onClick={patchName}
                   onChange={setName}
                   item={name} 
                   />
            <InputForm setAllChange={setAllChange} 
                   allChange={allChange}
                   name="소속"
                   onClick={patchOrganizaion}
                   onChange={setOrganizaion}
                   item={organizaion} 
                   />
            {allChange === 2 ? <button className="allChange" onClick={changeClick}>모두 변경</button> : null}
          </div>
        </div> 
      </div>
    </div>
  );
};

export default ProfileUi;