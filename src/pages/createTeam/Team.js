import axios from "axios";
import React from "react";
import '../../styles/Team.scss'
import IP from "../../CommonIp";

const Team = ({teamClick}) => {

  const createTeam = () => {
    axios.post(IP + '/teams',{
      name : document.getElementsByClassName('nameBox').value
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
    <div className="bg" onClick={teamClick}/>
        <div className="login create">
          <button className="close" onClick={teamClick}>
            <img alt="close" src={require('../../images/Close.svg').default}/>
          </button>
          <div className="text">
            <div className="important">*</div>
            <input className="nameBox" type='text' placeholder="팀명 입력" />
            <button className="createBtn" onClick={createTeam()}>생성</button>
          </div>
        </div>
    </>
  );
};

export default Team;
