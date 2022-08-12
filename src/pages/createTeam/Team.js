import React from "react";
import '../../styles/Team.scss'

const Team = ({teamClick}) => {
  return (
    <>
    <div className="bg" onClick={teamClick}/>
        <div className="login create">
          <button className="close" onClick={teamClick}>
            <img alt="close" src={require('../../images/Close.svg').default}/>
          </button>
          <span className="important">*</span>
          <input className="nameBox" type='text'/>
          <input className="createBtn" type='submit'/>
        </div>
    </>
  );
};

export default Team;
