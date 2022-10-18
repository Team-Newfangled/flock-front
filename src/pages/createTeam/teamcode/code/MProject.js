import React, { useEffect, useState } from "react";
import '../../../../styles/TeamCode.scss'
import { getProjects } from "../../../../util/api/project";

const pagemove = () =>{
  window.location.href="teamleader"
}
function MProject({team_id}) {

  const [projects,setProjects] = useState([])

  useEffect(() => {
    (async () => {
      const res = await getProjects(team_id)
      console.log(res)
    })()
  },[])


  const data=[
    // {id:1,name:'프로젝트 명'},
    // {id:2,name:'프로젝트 명1'},
    // {id:3,name:'프로젝트 명2'},
    // {id:4,name:'프로젝트 명3'},
  ];

  let [mp, setMp]=useState(data);

  return (
    <>
    <div className="membarBox proBox">
    {
      mp.map(function(a){
        
        return(
          
            <div className="king pro" onClick={pagemove}>{a.name}
            <img className='trash' src={require('../../../../images/trash.svg').default}/>
            </div>
        )
      })
    }
    </div>
      
    </>
  );
}
export default MProject;