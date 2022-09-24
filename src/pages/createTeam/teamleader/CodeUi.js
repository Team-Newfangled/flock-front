import React from "react";
import { useState } from 'react'
import '../../../styles/Teamleader.scss'
import Copy from './code/Copy.js'
import People from './code/People.js'
import axios from "axios";
import { useNavigate } from 'react-router-dom'


  const Teamleader = () =>{

    let navigate = useNavigate();
    let [pn, setPn]=useState();
    let tn=['팀이름']


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
              <Copy/>
              <People/>
            </div>
            <div className="ssBox">
              <div className="projectbbb">
                <h3>프로젝트 관리</h3>
                <img className="changecover" src={require('../../../images/changecover.svg').default} alt="커버 변경하기"/>
                <h4>프로젝트 명</h4>
                <div className="projectRname">
                  <input className='capyInput' placeholder="프로젝트 명" type="text" 
                  onChange={(e)=>{setPn(e.target.value)}}></input>
                  <button className='capyBtn'
                  onClick={()=>{
                    axios.post("",{adsf:pn}).then(()=>{});
                  }}>수정</button>
                </div>
                <h4>대기 중인 팀원</h4>
                <button className="newBtn teamGo" onClick={()=>{ navigate('/Member')}}>팀원 승인하러 가기</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teamleader;