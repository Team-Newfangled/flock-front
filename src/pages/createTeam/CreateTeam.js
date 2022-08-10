import React from "react";
import Header from "../../components/Header";
import '../../styles/CreateTeam.scss'
import { NavLink } from "react-router-dom";
import Calendar from 'react-calendar';


const CreateTeam = () => {
  return (
    <>
      <Header/>
      <div className="dateBox">
        <NavLink to='/'><button id='link'>My Page</button></NavLink>
        <NavLink to='/'><button id='link'>My Team</button></NavLink>
        <div className="date">데드라인
        <Calendar></Calendar>
        </div>
      </div>
    </>  
  );
};

export default CreateTeam;