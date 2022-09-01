import TeamHeader from "../../components/header/Header";
import '../../styles/Project.scss';
import Head from './todo/Head.js';
import List from './todo/List.js';
import Todo from "./todo/Todo.js";


const Project = () => {
  

  return (
    <>
      <TeamHeader/>
      <Todo>
        <Head/>
        <List/>
      </Todo>
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