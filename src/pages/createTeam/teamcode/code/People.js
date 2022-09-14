import axios from "axios";
import React, { useState } from "react";
import '../../../../styles/TeamCode.scss'

function People() {

  const data=[
    {id:0, name:'팀원이름'},
    {id:1, name:'팀원이름1'},
    {id:2, name:'팀원이름2'},
    {id:3, name:'팀원이름3'},
    {id:4, name:'팀원이름4'},
  ];

  let [mer, setMer]=useState(data)

  return (
    <>
      <div className="membarBox">
        <div className="king">팀장이름</div>

        {
          mer.map(function(a){
            return(
            <div className="king membar">{a.name}
            <img className='trash' onClick={()=>{
              axios.post("",{asdf:a}).then(()=>{});
            }}
            src={require('../../../../images/trash.svg').default}/></div>
            )
          })
        }
        
     
      
      </div>
      
    </>
  );
}
export default People;