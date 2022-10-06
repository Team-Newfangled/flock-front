import axios from "axios";
import React, { useEffect, useState } from "react";
import '../../../../styles/Teamleader.scss'
import { getTeamMembers } from "../../../../util/api/team";

function People({info}) {



  useEffect(() => {
    ( async () => {
      const res = await getTeamMembers(info.team_id)
      console.log(res)
    })

  },[])

  const data=[
    {id:0, name:'zz'},
    {id:1, name:'ㅇㅁ'},
    {id:2, name:'ㅁㅇㄹ'},
  ]

  const king=['팀장이름'];
  let [km, setKm]=useState(data);

  return (
    <>
      <div className="membarBox">
        <div className="king">{king}</div>
        <div className="king membar">프로젝트 관리자 이름
          <div className="manager">
            <img  onClick={()=>{
              axios.post("",{}).then(()=>{});
            }}
            src={require('../../../../images/Pmanager.svg').default}/>
            <img className='trash' onClick={()=>{
              axios.post("",{}).then(()=>{});
            }}
            src={require('../../../../images/trash.svg').default}/>
          </div>
        </div>

        {
          km.map(function (a) {
            return(
              <div className="king membar" key={a.id}>
              {a.name}
                <div className="manager">
                  <img src={require('../../../../images/Pemploye.svg').default}
                  onClick={()=>{
                    axios.post("",{}).then(()=>{});
                  }}/>
                  <img className='trash' src={require('../../../../images/trash.svg').default}
                  onClick={()=>{
                    axios.post("",{}).then(()=>{});
                  }}/>
                </div>
              </div>
            )
          })
        }

        
      </div>
      
    </>
  );
}
export default People;