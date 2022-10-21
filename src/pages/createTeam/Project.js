import React, { useState } from "react";
import '../../styles/Team.scss'
import { createProjects } from "../../util/api/project";

const Project = ({projectClick, team_id, projects, setProjects}) => {
  const [name, setName] = useState("");

  const func = async(e) => {
    e.preventDefault();

    await createProjects(team_id, name)
    .then((res) => {
      const temp = {...projects.map((value) => value)[0]}
      temp[team_id].push(res.data)
      setProjects([temp])
      projectClick()
    })
  };

  return (
    <>
      <div className="bg" onClick={projectClick}/>
      <div className="login create">
        <button className="close" onClick={projectClick}>
          <img alt="close" src={require('../../images/Close.svg').default}/>
        </button>
        <form className="text" onSubmit={func}>
          <div className="important">*</div>
          <input 
            className="nameBox" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            type='text' 
            placeholder="프로젝트명 입력" 
          />
          <button className="createBtn" type="submit">생성</button>
        </form>
      </div>
    </>
  );
};

export default Project;
