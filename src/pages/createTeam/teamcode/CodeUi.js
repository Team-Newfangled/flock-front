import React from "react";
import { useState } from 'react'
import '../../../styles/TeamCode.scss'
import Capy from './code/Capy.js'
import People from './code/People.js'
import MProject from './code/MProject.js'
import Project from "../Project.js";


  const TeamCode = () =>{

    const [isPopup, setIsPopup] = useState(false);
    const projectClick = () => {
      setIsPopup(!isPopup);
      !isPopup ? document.body.style.overflow = "hidden": document.body.style.overflow = "unset";
    }

  return (
    <>
    <div className="h1Box">
          <h1>팀 정보</h1>
    </div>
      <div className="team">
        <div className="TeamBox">
          <h2 className="tName">팀이름</h2>

          <div className="sBox">
            <div className="people">
              <h3>팀원 관리</h3>
              <Capy/>
              <People/>
            </div>
            <div className="ssBox">
            <div className="project">
              <h3>프로젝트 관리</h3>
              <MProject/>
              <button className="newBtn" onClick={projectClick}>새 프로젝트 생성</button>
            </div>

            <div className="accept">
              <h3>팀원 수락</h3>
            </div>
            </div>
          </div>
        </div>
      </div>
      {isPopup ? <Project projectClick={projectClick}/> : ''}

    </>
  );
};

export default TeamCode;