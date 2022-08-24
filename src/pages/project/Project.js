import TeamHeader from "../../components/header/Header";
import '../../styles/Project.scss';
import ToDo from "./ToDo.js";


const Project = () => {

  return (
    <>
      <TeamHeader/>
      <ToDo/>
      <div>
        <div>
          <img className='go' src={require('../../images/go.svg').default} />
        </div>
        <div className="iBox">
          <img className='lineImg' src={require('../../images/lineBox.svg').default}/>
          <div className="space"></div>
          <img className='feed' src={require('../../images/feed.svg').default} />
        </div>
      </div>
    </>
  )
}

export default Project;