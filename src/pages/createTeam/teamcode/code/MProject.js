import { id } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import '../../../../styles/TeamCode.scss';
import { getProjects, deleteProject } from "../../../../util/api/project";


function MProject({team_id}) {

  const [projects,setProjects] = useState([]);
 
  const params = useParams();
  const projectdelete = async (id)=>{
      await deleteProject(id)
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  useEffect(() => {
    (async () => {
      const res = await getProjects(team_id)
      setProjects([...res.data.results])
      // console.log(res)
    })()
  },[params])

  const data=[
    // {id:1,name:'프로젝트 명'},
    // {id:2,name:'프로젝트 명1'},
    // {id:3,name:'프로젝트 명2'},
    // {id:4,name:'프로젝트 명3'},
  ];

  // let [mp, setMp]=useState(data);

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