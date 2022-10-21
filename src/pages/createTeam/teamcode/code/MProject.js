import React from "react";
import { Link } from "react-router-dom";
import '../../../../styles/TeamCode.scss';
import { deleteProject } from "../../../../util/api/project";


function MProject({ projects, setProjects }) { 
  const projectdelete = async (id)=>{
    await deleteProject(id)
    .then((res)=>{
      const temp = [...projects.filter((value) => value.id !== id)]
      console.log(temp)
      setProjects([...temp])
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  

  return (
    <>
    <div className="membarBox proBox">
    {
      projects.map(function(a){
        return(
          <div className="projectBlock">    
            <Link to={`/teamleader/${a.id}/${a.name}`}> 
              <div className="kingpro" >{a.name}
              </div>
            </Link>
            <img className='trash' src={require('../../../../images/trash.svg').default} onClick={()=>{
                projectdelete(a.id);
              }} />
          </div>
        )
      })
    }
    </div>
      
    </>
  );
}
export default MProject;