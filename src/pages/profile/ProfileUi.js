import React, { useEffect, useState } from "react";
import Input from './Input';
import '../../styles/Profile.scss'
import axios from "axios";

const ProfileUi = () => {
  const [allChange, setAllChange] = useState(0);
  const [files, setFiles] = useState('');

  const onLoadFile = e => {
    const file = e.target.files;
    console.log(file)
    setFiles(file)
  }

  const changeClick = e => {
    const formdata = new FormData();
    formdata.append('uploadImage,', files[0]);

    const config = {
      Headers: {
        'content-type': 'multipart/form-data',
      },
    };

    axios.patch('http://localhost:3000/users/{user-id}/picture', formdata, config)
    .thre(res => {
      console.log(res)
    })
    .catch(res =>{
      console.log(res)
    })
  }

  useEffect(() => {
    preview();

    return () => preview()
  })

  const preview = () =>{
    if(!files) return false;

    const imgEl = document.querySelector('.imgWrap')

    const reader = new FileReader();

    reader.onload = () =>{
      (imgEl.style.backgroundImage = 'url(${reader.result})')

      reader.readAsDataURL(files[0]);
    }
  }

  return (
    <>
      <div className="h1Box">
          <h1>내 정보</h1>
      </div>
      <div className="profile">
        <div className="profileBox">
          <div className="imgWrap">
            <img className='profileImg' src={require('../../images/myProfile.svg').default} alt="프로필"/>
          </div>
          <div className="fileInputBox">
            <label for="file_input" style={{cursor: 'pointer'}}>
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
            {allChange === 2 ? <button className="allChange">모두 변경</button> : null}
          </div>
        </div> 
      </div>
    </>
  );
};

export default ProfileUi;