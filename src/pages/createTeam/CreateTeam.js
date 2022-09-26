import React, { useEffect } from "react";
import TeamHeader from "../../components/header/TeamHeader";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../../styles/CreateTeam.scss'
import { NavLink } from "react-router-dom";
import Scroll from "../../components/common/Scroll/scroll";
import Project from "./Project.js";
import ProjectCalendar from "../../components/common/calendar/Calendar";
import Chat from "../../components/common/chat/Chat";
import { getTeams } from "../../util/api/team";
import { getProjects } from "../../util/api/project";
const CreateTeam = () => {
  const [isPopup, setIsPopup] = useState(false);
  const scroll = Scroll();
  const projectClick = () => {
    setIsPopup(!isPopup);
    !isPopup ? document.body.style.overflow = "hidden": document.body.style.overflow = "unset";
  } 

  const [teams,setTeams] = useState([]);
  const [projects,setProjects] = useState([]);

  let navigate = useNavigate();

  // 유저의 팀을 받고 팀이 없으면 팀이 존재하지 않습니다 출력해주기, map 사용해서 team마다 project 출력해주기
  // useEffect(() => {
  //   if (getTeams(window.localStorage.getItem('user_id')) !== '404') {
  //     setTeams([...getTeams(window.localStorage.getItem('user_id'))])
  //   }
  //   teams.map((id,name) => {
  //     setProjects([...getProjects(id)])
  //   })
  // },[])

  const data = [
    {id: 0, title: '선택 1'},
    {id: 1, title: '선택 2'},
    {id: 2, title: '선택 3'},
    {id: 3, title: '선택 4'},
  ];

  const data1=[
    {id:0, name:'zz'},
    {id:1, name:'ㅇㅁ'},
    {id:2, name:'ㅁㅇㄹ'},
  ];
  
  let [box, setBox]=useState(data);

  return (
    <>
      <TeamHeader/>
      <Chat/>
      <div className="teamBox">
        {
          data1.map(function(x,y) {
            return(
              <div className="projectBox" key={x.id}>
                <p className="tName">{x.name}</p>
                  <div className="wrap">
                    {
                      box.map(function(a,i){
                        return(
                          <div className="p-create" key={a.id}>
                            <p className="p-name">{a.title}</p>
                            <img className="modify_btn" onClick={()=>{navigate('/teamleader')}} src={require('../../images/modify.svg').default} alt="추가아이콘"/>
                          </div>
                        )
                      })
                    }

                    <div className="p-create add-team" onClick={projectClick}>
                      <img className="add-btn"  src={require('../../images/Add.svg').default} alt="추가아이콘"/>
                    </div>
                  </div>
              </div>
            )
          })
        }
      </div>

      <div className="dateBox">
        <NavLink to='/teamleader'><button id='link'>My Page</button></NavLink>
        <NavLink to='/TeamCode'><button id='link'>My Team</button></NavLink>
        <div className="date">데드라인
          <ProjectCalendar />
        </div>
      </div>
      {isPopup ? <Project projectClick={projectClick}/> : ''}
    </>  
  );
};

export default CreateTeam;