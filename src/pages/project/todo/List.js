import React from "react";
import Item from "./Item.js";
import '../../../styles/Todo.scss'

function List({todos, setTodos}) {
  return(
    <div className='TodoList'>
    {
      todos.map((item, i) => {
        return (
          <Item text={item.content} done={item.completed} id={item.id} manager={item.manager} todos={todos} setTodos={setTodos} key={i}/>
        )
      })
    }
    </div>
  )
}

export default List;