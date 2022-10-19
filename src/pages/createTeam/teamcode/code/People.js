import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../../../styles/TeamCode.scss'
import { deleteTeamMembers, getTeamMembers, getTeamLeader } from "../../../../util/api/team";

function People() {

  const params = useParams();

  const [teamMembers,setTeamMembers] = useState([])
  const [teamLeader,setTeamLeader]= useState([])
  // useEffect(() => {
  //   (
  //     async () => {
  //       const res = await getTeamLeader(params.team_id)
  //       setTeamLeader([...res.data.results])
  //     }
  //   )();
  // },[params])
  useEffect(() => {
    (
      async () => {
        const res = await getTeamMembers(params.team_id)
        //  console.log(res);
        setTeamMembers([...res.data.results])
      }
    )();
  },[params])
  console.log();
  const data=[
    // {id:0, name:'팀원이름'},
    // {id:1, name:'팀원이름1'},
    // {id:2, name:'팀원이름2'},
    // {id:3, name:'팀원이름3'},
    // {id:4, name:'팀원이름4'},
  ];

  let [mer, setMer]=useState(data)
  return (
    <>
      <div className="membarBox">
        <div className="king">{teamMembers.map( a =>{
          return (a.name)
        })}</div>
        {
          teamMembers.map( a => {
            let check = 0;
            if(check != 0){
              return(
                <div className="king membar">{a.name}
                <img className='trash' src={require('../../../../images/trash.svg').default}/></div>
              )
            }
            check++;
          })
        }
              
      </div>
      
    </>
  );
}
export default People;