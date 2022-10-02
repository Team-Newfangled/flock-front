import React from "react";
import '../../styles/Team.scss'
import { createProjects } from "../../util/api/project";

const Project = ({projectClick}) => {
  return (
    <>
    <div className="bg" onClick={projectClick}/>
        <div className="login create">
          <button className="close" onClick={projectClick}>
            <img alt="close" src={require('../../images/Close.svg').default}/>
          </button>
          <div className="text">
            <div className="important">*</div>
            <input className="nameBox" type='text' placeholder="프로젝트명 입력" />
            <button className="createBtn" onClick={createProjects(document.getElementsByClassName('nameBox').value,)}>생성</button>
          </div>
        </div>
    </>
  );
};

export default Project;
