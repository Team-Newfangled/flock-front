import React, { useState } from "react";
import { useSelector } from "react-redux";
import { 
  changeCompany, 
  changeFile, 
  changeName
} from "../../util/api/user";
import InputForm from './InputForm';
import '../../styles/Profile.scss'
import axios from "axios";

const ProfileUi = () => {
  const user = useSelector((state) => state.user.value)
  const [allChange, setAllChange] = useState(0);
  const [file, setFile] = useState(user.image);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');

  const onLoadFile = (e) => {
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

  const changeClick = async(e) => {
    e.preventDefault();
    await axios.all([changeFile(file), changeName(name), changeCompany(company)])
    .then(axios.spread((file, name, company) => {
      console.log(file, name, company);
    }));
  };

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
            <InputForm 
                   setAllChange={setAllChange} 
                   allChange={allChange}
                   name="닉네임" 
                   onChange={setName}
                   item={name}
                   value={user.nickname} 
            />
            <InputForm 
                   setAllChange={setAllChange} 
                   allChange={allChange}
                   name="소속"
                   onChange={setCompany}
                   item={company}
                   value={user.company} 
            />
            {allChange === 2 ? <button className="allChange" onClick={changeClick}>모두 변경</button> : null}
          </div>
        </div> 
      </div>
    </div>
  );
};

export default ProfileUi;