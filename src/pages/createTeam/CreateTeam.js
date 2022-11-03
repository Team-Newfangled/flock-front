import React, { useEffect } from "react";
import TeamHeader from "../../components/header/TeamHeader";
import { useState } from 'react'
import { Link } from "react-router-dom";
import '../../styles/CreateTeam.scss'
import { NavLink } from "react-router-dom";
import Project from "./Project.js";
import ProjectCalendar from "../../components/common/calendar/Calendar";
import Chat from "../../components/common/chat/Chat";
import { getTeams } from "../../util/api/team";
import { getProjects } from "../../util/api/project";
import { getNowTodo } from "../../util/api/user";

const CreateTeam = () => {
  const [teamId, setTeamId] = useState('');
  const [nowTodo, setNowTodo] = useState([]);
  const [isPopup, setIsPopup] = useState(false);
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (1 + date.getMonth())).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  const projectClick = (team_id) => {
    setIsPopup(!isPopup);
    setTeamId(team_id);
  }

  const getNowDateTodo = async() => {
    await getNowTodo(localStorage.getItem('user_id'), year, month, day)
    .then((res) => {
      setNowTodo(res.data.results)
    }).catch((err) => {
      console.log(err);
    })
  };

  const [teams,setTeams] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      await getTeams(localStorage.getItem('user_id'))
      .then((res) => {
        let arr = {}
        res.data.result.map(async(a,i) => {
          await getProjects(a['team-id'])
          .then((res) => {
            arr[a['team-id']] = res.data.results
          })
          const temp = [arr]
          setProjects(temp)
        })
        const temp = [...res.data.result]
        setTeams(temp)
      })
    })()
    getNowDateTodo();
  },[])

  return (
    <>
      <TeamHeader teams={teams} setTeams={setTeams}/>
      <Chat/>
      <div className="teamBox">
        {
          teams.map((x,y) => { /* x = 팀 */
            // console.log(x)
            return(
              <div className="projectBox" key={x['team-id']}>
                <Link to={`/teamcode/${x['team-id']}/${x['team-name']}`} className="tName">{x['team-name']}</Link>
                  <div className="wrap">
                    {
                      projects.map((t,i) => {
                        return(
                          Array.isArray(t[x['team-id']]) && t[x['team-id']].map((a,j) => { /* a가 */
                            let img = a.cover_image;
                            return(
                              <div key={a.id} style={{ position: "relative", width: "180px", height: "200px", marginRight: "10px"}}>
                                <Link to={`/project/${a.id}`} className="p-create">
                                  <p className="p-name">{a.name}</p>
                                  <img className="coverimg" src={img || require('../../images/cover.svg').default} alt="커버"/>
                                </Link>
                                <Link to={`/teamleader/${a.id}/${a.name}`} className="modify_btn">
                                  <img src={require('../../images/modify.svg').default}alt="추가아이콘"/>
                                </Link>
                              </div>
                          )}
                        ))
                      })
                    }
                    <div className="p-create add-team" onClick={() => {
                                                                        projectClick(x['team-id'])
                                                                      }}>
                      <img className="add-btn" src={require('../../images/Add.svg').default} alt="추가아이콘"/>
                    </div>
                  </div>
              </div>
            )
          })
        }
      </div>

      <div className="dateBox">
      <NavLink to='/Profile'><button id='link'>My Page</button></NavLink>
        <div className="date">
          <ProjectCalendar />
        </div>
        <div className="now-todo">
          <h2>오늘 할 일</h2>
          <div className="now-todo-list">
            {nowTodo.length === 0 ? 
              <div className="not-todo">
                <div className="todo-text">오늘의 할 일이 없습니다</div>
              </div>
            :
            nowTodo.map(({todo_content}) => (
              <div className="now-todo-item">
                <h4>{todo_content}</h4>
                <span>{year}-{month}-{day}</span>
              </div>
            ))}
          </div> 
        </div> 
      </div> 
      {isPopup ? <Project 
                    projectClick={projectClick} 
                    team_id={teamId} 
                    projects={projects} 
                    setProjects={setProjects} 
                  /> : ''}
    </> 
  ); 
}; 

export default CreateTeam;