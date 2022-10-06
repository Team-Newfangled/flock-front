import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import TeamHeader from "../../components/header/Header";
import '../../styles/Project.scss';
import Head from './todo/Head.js';
import List from './todo/List.js';
import Todo from "./todo/Todo.js";


const Project = () => {
  
  const params = useParams();

  return (
    <>
      <TeamHeader/>
      <Todo>
        <Head/>
        <List project_id={params}/>
      </Todo>
      <div>
        <Link to={`/progress${params}`}>
          <img className='go' src={require('../../images/go.svg').default} />
        </Link>
        <div className="iBox">
          <Link to={`/deadline/:${params}`} className='lineImg'>
            <img src={require('../../images/lineBox.svg').default}/>
          </Link>
          <div className="space"></div>
          <Link to={`/feed`}  className='feed'>
            <img src={require('../../images/feed.svg').default} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Project;
