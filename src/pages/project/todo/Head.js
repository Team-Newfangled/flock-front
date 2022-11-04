import React, { useState } from "react";
import { useSelector } from "react-redux";
import '../../../styles/Todo.scss';
import { createTodoItems } from "../../../util/api/project";

function Head({project_id,todos,setTodos}) {
  const isRole = useSelector((state) => state.isRoleData.role);
  const [todo,setTodo] = useState('')
  
  const func = async(e) => {
    e.preventDefault();

    if (todo.length < 1){
      alert('할 일을 입력해주세요!')
      return
    }

    await createTodoItems(project_id,todo)
    .then((res) => {
      let temp = [...todos]
      temp.unshift(res.data)
      setTodos([...temp])
    })
    setTodo('')
  }


  return(
    <>
    <div className="headBlock">
      <h1 className="todoH1">TO-DO!</h1>
      {isRole && 
      <form onSubmit={func}>
        <input className="plus" type='text' placeholder='할 일을 적어주세요'
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        />
        <button className="plusBtn" type='submit'>
          <img src={require('../../../images/Add.svg').default}/>
        </button>
      </form>}
    </div>
    </>
  )
}

export default Head;