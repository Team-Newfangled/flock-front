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
          <div className="text">
            <div className="important">*</div>
            <input className="nameBox" type='text' placeholder="팀명 입력" />
            <button className="createBtn">생성</button>
          </div>
        </div>
    </>
  );
};

export default Team;
