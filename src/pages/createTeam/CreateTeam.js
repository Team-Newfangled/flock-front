import React from "react";
import TeamHeader from "../../components/TeamHeader";
import { useState } from 'react'
import '../../styles/CreateTeam.scss'
import { NavLink } from "react-router-dom";
import Calendar from 'react-calendar';
import '../../styles/Calendar.scss';
import moment from "moment";


const CreateTeam = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <TeamHeader/>

      <div className="teamBox">
        <div className="projectBox">
          <p className="tName">팀이름</p>
            <div className="wrap">
              <div className="p-create"/>
              <div className="p-create">
              <img className='addIcon' src={require('../../images/Add.svg').default} alt="추가아이콘"/>
              </div>
            </div>
        </div>
      </div>

      <div className="dateBox">
        <NavLink to='/'><button id='link'>My Page</button></NavLink>
        <NavLink to='/'><button id='link'>My Team</button></NavLink>
        <div className="date">데드라인
          <Calendar
            onChange={onChange}
            formatDay={(locale, date) => moment(date).format("DD")}
            value={value}
            
          />
        </div>
      </div>
    </>  
  );
};

export default CreateTeam;