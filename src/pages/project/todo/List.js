import React, { useState } from "react";
import Item from "./Item.js";
import '../../../styles/Todo.scss'
import { getTodoItems } from "../../../util/api/project/index.js";

function List() {

  let [items,setitems] = useState([])

  setitems([...getTodoItems(window.localStorage.getItem('project-id'))])

  return(
    <>
    <div className='TodoList'>
    {
      items.map((item) => {
        return (
          <Item text={item.results[0].content} done={item.results[0].completed}/>
        )
      })
    }
    </div>
    </>
  )
}

export default List;