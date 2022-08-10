import React from "react";
import Header from "../../components/Header";
import { useState } from 'react'
import '../../styles/CreateTeam.scss'
import { NavLink } from "react-router-dom";
import Calendar from 'react-calendar';
import '../../styles/Calendar.scss';


const CreateTeam = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Header/>
      <div className="dateBox">
        <NavLink to='/'><button id='link'>My Page</button></NavLink>
        <NavLink to='/'><button id='link'>My Team</button></NavLink>
        <div className="date">데드라인
          <Calendar
            onChange={onChange}
            value={value}
          />
        </div>
      </div>
    </>  
  );
};

export default CreateTeam;