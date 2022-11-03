import axios from "axios";
import React, { useEffect, useState } from "react";
import '../../styles/Team.scss'
import { createTeams } from "../../util/api/team";

const Team = ({teamClick, teams, setTeams}) => {

  const [teamName,setTeamName] = useState('')

  const func = async(e) => {
    
    e.preventDefault();

    if(teamName.length < 1){
      alert('팀명을 입력해주세요!!')
      return
    } 

    await createTeams(teamName)
    .then((res) => {
      const temp = [...teams]
      temp.push(res.data)
      setTeams(temp)
    })
    teamClick()
  }

  return (
    <>
    <div className="bg" onClick={teamClick}/>
        <div className="login create">
          <button className="close" onClick={teamClick}>
            <img alt="close" src={require('../../images/Close.svg').default}/>
          </button>
          <form className="text" onSubmit={func}>
            <div className="important">*</div>
            <input className="nameBox" type='text' placeholder="팀명 입력"
              onChange={e => setTeamName(e.target.value)}
            />
            <button className="createBtn"
              type="submit"
            >생성</button>
          </form>
        </div>
    </>
  );
};

export default Team;
