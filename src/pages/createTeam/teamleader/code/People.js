import React from "react";
import '../../../../styles/Teamleader.scss'

function People() {

  return (
    <>
      <div className="membarBox">
        <div className="king">팀장이름</div>
        <div className="king membar">프로젝트 관리자 이름
          <div className="manager">
            <img  onClick={()=>{

            }}
            src={require('../../../../images/Pmanager.svg').default}/>
            <img className='trash' onClick={()=>{
              
            }}
            src={require('../../../../images/trash.svg').default}/>
          </div>
        </div>
        <div className="king membar">팀원이름
          <div className="manager">
            <img src={require('../../../../images/Pemploye.svg').default}/>
            <img className='trash' src={require('../../../../images/trash.svg').default}/>
          </div>
        </div>
        <div className="king membar">팀원이름
        <img className='trash' src={require('../../../../images/trash.svg').default}/></div>
        <div className="king membar">팀원이름
        <img className='trash' src={require('../../../../images/trash.svg').default}/></div>
        <div className="king membar">팀원이름
        <img className='trash' src={require('../../../../images/trash.svg').default}/></div>
        <div className="king membar">팀원이름
        <img className='trash' src={require('../../../../images/trash.svg').default}/></div>
        <div className="king membar">팀원이름
        <img className='trash' src={require('../../../../images/trash.svg').default}/></div>
        <div className="king membar">팀원이름
        <img className='trash' src={require('../../../../images/trash.svg').default}/></div>
      </div>
      
    </>
  );
}
export default People;