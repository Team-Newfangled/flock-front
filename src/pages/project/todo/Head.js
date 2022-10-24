import React, { useState } from "react";
import '../../../styles/Todo.scss';
import { createTodoItems } from "../../../util/api/project";

function Head({project_id,todos,setTodos}) {

  const [todo,setTodo] = useState('')

  const func = async(e) => {
    e.preventDefault();

    await createTodoItems(project_id,todo)
    .then((res) => {
      const temp = todos.slice()
      temp.concat(res)
      setTodos(temp)
    })
    
  }


  return(
    <>
    <div className="headBlock">
      <h1 className="todoH1">TO-DO!</h1>
      <form onSubmit={func}>
        <input className="plus" type='text' placeholder='할 일을 적어주세요'
        onChange={(e) => setTodo(e.target.value)}
        />
        <input className="plusBtn" type='submit'>
          <img src={require('../../../images/Add.svg').default}/>
        </input>
      </form>
    </div>
    </>
  )
}

export default Head;