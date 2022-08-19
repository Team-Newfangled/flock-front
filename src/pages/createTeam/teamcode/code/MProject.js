import React from "react";
import '../../../../styles/TeamCode.scss'

const pagemove = () =>{
  window.location.href="teamleader"
}
function MProject() {

  return (
    <>
      <div className="membarBox proBox">
        <div className="king pro" onClick={pagemove}>프로젝트이름
        <img className='trash' src={require('../../../../images/trash.svg').default}/>
        </div>
        <div className="king pro">프로젝트이름
        <img className='trash' src={require('../../../../images/trash.svg').default}/>
        </div>
        <div className="king pro">프로젝트이름
        <img className='trash' src={require('../../../../images/trash.svg').default}/>
        </div>
        <div className="king pro">프로젝트이름
        <img className='trash' src={require('../../../../images/trash.svg').default}/>
        </div>
        <div className="king pro">프로젝트이름
        <img className='trash' src={require('../../../../images/trash.svg').default}/>
        </div>
      </div>
      
    </>
  );
}
export default MProject;