import React from "react";
import { useState, useEffect } from 'react'
import '../../../styles/TeamCode.scss'
import Capy from './code/Copy.js'
import People from './code/People.js'
import MProject from './code/MProject.js'
import Project from "../Project.js";
import { useNavigate, useParams } from 'react-router-dom'
import { getProjects } from "../../../util/api/project";

  const TeamCode = () =>{
    const [projects,setProjects] = useState([]);
    const [isPopup, setIsPopup] = useState(false);
    let params = useParams();
    let navigate = useNavigate();

    let tn = params.team_name
    let id = params.team_id

    const projectClick = (id) => {
      setIsPopup(!isPopup);
    }

    useEffect(() => {
      (async () => {
        const res = await getProjects(id)
        setProjects([...res.data.results])
        // console.log(res)
      })()
    },[params])

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
              <Capy team_id={id}/>
              <People team_id={id}/>
            </div>
            <div className="ssBox">
            <div className="project">
              <h3>프로젝트 관리</h3>
              <MProject projects={projects} setProjects={setProjects}></MProject>
              <button className="newBtn" onClick={() => {projectClick(id)}}>새 프로젝트 생성</button>
            </div>
            <div className="accept">
              <h3>팀원 수락</h3>
              <div className="wait">
                <img className="waitBtn" src={require("../../../images/accept.svg").default}/>
                승인 대기 목록
              </div>
              <button className="newBtn" onClick={()=>{ navigate(`/Member/${id}/${tn}`)}}>팀원 승인</button>
            </div>
            </div>
          </div>
        </div>
      </div>
      {isPopup ? <Project isOne={true} projectClick={projectClick} team_id = {id} projects={projects} setProjects={setProjects}/> : ''}
    </>
  );
};

export default TeamCode;