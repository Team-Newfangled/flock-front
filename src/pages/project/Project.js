import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TeamHeader from "../../components/header/Header";
import '../../styles/Project.scss';
import { getTodoItems } from "../../util/api/project";
import { getUserRole } from "../../util/api/user";
import Head from './todo/Head.js';
import List from './todo/List.js';
import Todo from "./todo/Todo.js";


const Project = () => {
  
  const params = useParams();

  const [todos,setTodos] = useState([]);
  const [role, setRole] = useState('');

  const getRole = async() => {
    await getUserRole(params.team_id)
    .then((res) => {
      setRole(res.data.role);
    }).catch((err) => {
      console.log(err);
    })
  };

  useEffect(() => {
  (
    async () => {
      await getTodoItems(params.project_id)
      .then((res) => {
        console.log(res)
        let arr = []
        arr = res.data.results
        setTodos([...arr])
      })
    }
  )()
  getRole();
  },[])


  return (
    <>
      <TeamHeader/>
      <Todo>
        {role === 'Leader' && <Head project_id={params.project_id} todos={todos} setTodos={setTodos}/>}
        <List project_id={params.project_id} todos={todos} setTodos={setTodos}/>
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
