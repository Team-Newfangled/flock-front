import React from "react";
import TeamHeader from "../../components/header/TeamHeader";
import { useState } from 'react'
import '../../styles/CreateTeam.scss'
import { NavLink } from "react-router-dom";
import Calendar from 'react-calendar';
import '../../styles/Calendar.scss';
import moment from "moment";
import Scroll from "../../components/Scroll/scroll.js";
import Project from "./Project.js";


const CreateTeam = () => {
  const [value, onChange] = useState(new Date());

  const [isPopup, setIsPopup] = useState(false);
  const scroll = Scroll();
  const projectClick = () => {
    setIsPopup(!isPopup);
    !isPopup ? document.body.style.overflow = "hidden": document.body.style.overflow = "unset";
  } 

  return (
    <>
      <TeamHeader/>

      <div className="teamBox">
        <div className="projectBox">
          <p className="tName">팀이름</p>
            <div className="wrap">
              <div className="p-create">
                <p className="p-name">프로젝트 명</p>
                <img className="modify_btn" src={require('../../images/modify.svg').default} alt="추가아이콘"/>
              </div>
              <div className="p-create"/>
              <div className="p-create"/>
              <div className="p-create"/>
              <div className="p-create"/>
              <div className="p-create add-team" onClick={projectClick}>
                <img className="add-btn"  src={require('../../images/Add.svg').default} alt="추가아이콘"/>
              </div>
            </div>
        </div>
        
        <div className="projectBox2">
          <p className="tName">팀이름</p>
            <div className="wrap">
              <div className="p-create"/>
              <div className="p-create"/>
              <div className="p-create"/>
              <div className="p-create"/>
              <div className="p-create"/>
              <div className="p-create add-team" onClick={projectClick}>
                <img className="add-btn" src={require('../../images/Add.svg').default} alt="추가아이콘"/>
              </div>
            </div>
        </div>
      </div>

      <div className="dateBox">
        <NavLink to='/'><button id='link'>My Page</button></NavLink>
        <NavLink to='/TeamCode'><button id='link'>My Team</button></NavLink>
        <div className="date">데드라인
          <Calendar
            onChange={onChange}
            formatDay={(locale, date) => moment(date).format("DD")}
            value={value}
            
          />
        </div>
      </div>
      {isPopup ? <Project projectClick={projectClick}/> : ''}
    </>  
  );
};

export default CreateTeam;