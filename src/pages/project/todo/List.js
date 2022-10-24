import React, { useEffect, useState } from "react";
import Item from "./Item.js";
import '../../../styles/Todo.scss'
import { getTodoItems } from "../../../util/api/project/index.js";

function List({todos, setTodos}) {
  return(
    <>
    <div className='TodoList'>
    {
      todos.map((item, i) => {
        return (
          <Item text={item.content} done={item.completed} id={item.id} todos={todos} setTodos={setTodos} key={i}/>
        )
      })
    }
    </div>
    </>
  )
}

export default List;