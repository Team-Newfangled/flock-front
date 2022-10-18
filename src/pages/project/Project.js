import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import TeamHeader from "../../components/header/Header";
import '../../styles/Project.scss';
import Head from './todo/Head.js';
import List from './todo/List.js';
import Todo from "./todo/Todo.js";


const Project = () => {
  
  const params = useParams();

  useEffect(() => {
    console.log(params)
  },[])

  return (
    <>
      <TeamHeader/>
      <Todo>
        <Head project_id={params.project_id}/>
        <List project_id={params.project_id}/>
      </Todo>
      <div>
        <Link to={`/progress/${params.project_id}`}>
          <img className='go' src={require('../../images/go.svg').default} />
        </Link>
        <div className="iBox">
          <Link to={`/deadline/${params.project_id}`} className='lineImg'>
            <img src={require('../../images/lineBox.svg').default}/>
          </Link>
          <div className="space"></div>
          <Link to={`/feed/${params.project_id}`}  className='feed'>
            <img src={require('../../images/feed.svg').default} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Project;
