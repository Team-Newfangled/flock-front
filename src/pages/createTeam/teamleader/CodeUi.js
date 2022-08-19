import React from "react";
import { useState } from 'react'
import '../../../styles/Teamleader.scss'
import Capy from './code/Capy.js'
import People from './code/People.js'
import { useNavigate } from 'react-router-dom'


  const Teamleader = () =>{

    let navigate = useNavigate();


  return (
    <>
    <div className="titleBox">
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
              </div>

              <div className="accept">


                <button className="newBtn" onClick={()=>{ navigate('/Member')}}>팀원 승인</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teamleader;