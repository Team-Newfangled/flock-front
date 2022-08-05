import React, { useState } from "react";
import Input from './Input';
import '../../styles/Profile.scss'
import axios from "axios";

const ProfileUi = () => {
  const [allChange, setAllChange] = useState(0);
  const [file, setFile] = useState('');

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

    return axios.patch('http://localhost:3000/users/{user-id}/picture', formdata, config);
  }

  const patchName = () => {
    return axios.patch('http://localhost:3000/users/{user-id}/name',{
      name: 123,
    })
  }

  const patchOrganizaion = () => {
    return axios.patch('http://localhost:3000/users/{user-id}/organizaion',{
      name: "카카오",
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
    <>
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
            {allChange === 2 ? <button className="allChange" onClick={changeClick}>모두 변경</button> : null}
          </div>
        </div> 
      </div>
    </>
  );
};

export default ProfileUi;