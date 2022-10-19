import React, { useEffect } from "react";
import { useState } from 'react'
import '../../../styles/Teamleader.scss'
import Copy from './code/Copy.js'
import People from './code/People.js'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { createTeams } from "../../../util/api/team";


const Teamleader = () =>{

  let navigate = useNavigate();
  let [pn, setPn]=useState();

  const params = useParams();
  const name = params.team_name
  const id = params.team_id

  return (
    <>
    <div className="titleBox">
        <h1>프로젝트 정보</h1>
    </div>
      <div className="team">
        <div className="TeamBox">
          <h2 className="tName">{name}</h2>
          <div className="sBox">
            <div className="people">
              <h3>팀원 관리</h3>
              <Copy/>
              <People team_id={id}/>
            </div>
            <div className="ssBox">
              <div className="projectbbb">
                <h3>프로젝트 관리</h3>
                <img className="changecover" src={require('../../../images/changecover.svg').default} alt="커버 변경하기"/>
                <h4>프로젝트 명</h4>
                <div className="projectRname">
                  <input className='capyInput' placeholder="프로젝트 명" type="text" 
                  onChange={(e)=>{setPn(e.target.value)}}></input>
                  <button className='capyBtn'>수정</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teamleader;