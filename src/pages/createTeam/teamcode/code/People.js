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
        console.log(res.data.results)
        setTeamMembers([...res.data.results])
      }
    )();
  },[params])

  const memberdelete = async (team_id,id)=>{
    await deleteTeamMembers(team_id,id)
    .then((res)=>{
      const temp = [...teamMembers.filter((value) => value.id !== id)]
      console.log(temp)
      setTeamMembers([...temp])
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <>
      <div className="membarBox">
        <div className="king">{teamMembers.filter((member) => member.role == "Leader").map((member) => member.name)}</div>
        {teamMembers.filter((member) => member.role == "Member").map((member) => (
          <div className="king membar">{member.name}
          <img className='peopletrash' src={require('../../../../images/trash.svg').default} onClick={()=>{
                memberdelete(params.team_id,member.id);
              }} /></div>
        ))}
      </div>
      
    </>
  );
}
export default People;