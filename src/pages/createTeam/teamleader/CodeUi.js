import React, { useEffect } from "react";
import { useState } from 'react'
import '../../../styles/Teamleader.scss'
import Copy from './code/Copy.js'
import People from './code/People.js'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getProjectsteam, patchProject } from "../../../util/api/project";

const Teamleader = () =>{

  let navigate = useNavigate();

  const params = useParams();
  const id = params.team_id;
  const name = params.team_name;

  const [pn, setPn]=useState(name);
  const [prn, setPrn]=useState();
  const [projectMembers,setProjectMembers] = useState([])
 
  useEffect(()=>{
    (
      async ()=>{
        const res = await getProjectsteam(id)
        setProjectMembers([...res.data.results])
      }
    )();
  })
  const changename = async (id, project_name)=> {
    await patchProject(id, project_name)
    .then((res)=>{
      setPn(project_name);
      setPrn("");
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <>
    <div className="titleBox">
        <h1>프로젝트 정보</h1>
    </div>
      <div className="team">
        <div className="TeamBox">
          <h2 className="tName">{pn}</h2>
          <div className="sBox">
            <div className="people">
              <h3>팀원 관리</h3>
              <People team_id={id}/>
            </div>
            <div className="ssBox">
              <div className="projectbbb">
                <h3>프로젝트 관리</h3>
                <img className="changecover" src={require('../../../images/changecover.svg').default} alt="커버 변경하기"/>
                <h4>프로젝트 명</h4>
                <div className="projectRname">
                  <input className='capyInput' placeholder={pn} type="text" value={prn}
                  onChange={(e)=>{setPrn(e.target.value)}}></input>
                  <button className='capyBtn' onClick={()=>{
                    console.log("프로젝트 이름 바꾸기 : ", prn)
                    changename(id,prn);
                  }}>수정</button>
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