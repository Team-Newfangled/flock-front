import React, { useEffect } from "react";
import TeamHeader from "../../components/header/TeamHeader";
import { useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../../styles/CreateTeam.scss'
import { NavLink } from "react-router-dom";
import Project from "./Project.js";
import ProjectCalendar from "../../components/common/calendar/Calendar";
import Chat from "../../components/common/chat/Chat";
import { getTeams } from "../../util/api/team";
import { getProjects } from "../../util/api/project";

const CreateTeam = () => {
  const [teamId, setTeamId] = useState('');
  const [isPopup, setIsPopup] = useState(false);
  const projectClick = (team_id) => {
    setIsPopup(!isPopup);
    !isPopup ? document.body.style.overflow = "hidden": document.body.style.overflow = "unset";
    setTeamId(team_id)
  }

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
          setProjects([arr])
        })
        setTeams([...res.data.result])
      })
    })()
  },[])
  return (
    <>
      <TeamHeader/>
      <Chat/>
      <div className="teamBox">
        {
          teams.map((x,y) => { /* x = 팀 */
            return(
              <div className="projectBox" key={x['team-id']}>
                <Link to={`/teamcode/${x['team-id']}/${x['team-name']}`} className="tName">{x['team-name']}</Link>
                  <div className="wrap">
                    {
                      projects.map((t,i) => {
                        return(
                          Array.isArray(t[x['team-id']]) && t[x['team-id']].map((a,j) => { /* a가 */
                            return(
                              <Link to={`/project/${a.id}`} className="p-create">
                                <p className="p-name">{a.name}</p>
                                <Link to={`/teamleader/${x['team-id']}/${x['team-name']}`}>
                                <img className="modify_btn" src={require('../../images/modify.svg').default}alt="추가아이콘"/>
                                </Link>
                              </Link>
                        )}))
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
        <NavLink to='/teamleader/1/이름'><button id='link'>My Page</button></NavLink>
        <NavLink to='/teamCode/1/이름'><button id='link'>My Team</button></NavLink>
        <div className="date">데드라인
          <ProjectCalendar />
        </div>
      </div>
      {isPopup ? <Project projectClick={projectClick} team_id={teamId}/> : ''}
    </>
  );
};

export default CreateTeam;