import React from "react";
import '../../../styles/TeamCode.scss'
import Capy from './Capy.js'


  const TeamCode = () =>{

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
              <h3>팀원관리</h3>
              <Capy></Capy>
            </div>
            <div className="ssBox">
            <div className="project">
              <h3>팀원관리</h3>
            </div>

            <div className="accept">
              <h3>팀원관리</h3>
            </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default TeamCode;