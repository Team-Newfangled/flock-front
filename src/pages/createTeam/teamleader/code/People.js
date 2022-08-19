import React from "react";
import '../../../../styles/TeamCode.scss'

function People() {

  return (
    <>
      <div className="membarBox">
        <div className="king">팀장이름</div>
        <div className="king membar">팀원이름
        <img className='trash' onClick={()=>{
          
        }}
        src={require('../../../../images/trash.svg').default}/></div>
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
        <div className="king membar">팀원이름
        <img className='trash' src={require('../../../../images/trash.svg').default}/></div>
      </div>
      
    </>
  );
}
export default People;