import React from "react";
import { useState } from 'react'
import '../../../styles/TeamCode.scss'
import Capy from './code/Copy.js'
import People from './code/People.js'
import MProject from './code/MProject.js'
import Project from "../Project.js";
import { useLocation, useNavigate, useParams } from 'react-router-dom'



  const TeamCode = () =>{

    let params = useParams();

    let navigate = useNavigate();

    const [isPopup, setIsPopup] = useState(false);
    let tn = params.team_name
    let id = params.team_id
    const [teamId, setTeamId] = useState('');

    const projectClick = (id) => {
      setIsPopup(!isPopup);
      !isPopup ? document.body.style.overflow = "hidden": document.body.style.overflow = "unset";
      console.log(id);
      setTeamId(id);
    }

  return (
    <>
    <div className="titleBox">
          <h1>팀 정보</h1>
    </div>
      <div className="team">
        <div className="TeamBox">
          <h2 className="tName">{tn}</h2>

          <div className="sBox">
            <div className="people">
              <h3>팀원 관리</h3>
              <Capy team_id={id}/>
              <People team_id={id}/>
            </div>
            <div className="ssBox">
            <div className="project">
              <h3>프로젝트 관리</h3>
              <MProject team_id={id}></MProject>
              <button className="newBtn" onClick={() => {projectClick(id)}}>새 프로젝트 생성</button>
            </div>
            </div>
          </div>
        </div>
      </div>
      {isPopup ? <Project projectClick={projectClick} team_id = {teamId}/*teamId = {team_id}*//> : ''}
    </>
  );
};

export default TeamCode;