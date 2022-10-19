import React, { useEffect, useState } from "react";
import Item from "./Item.js";
import '../../../styles/Todo.scss'
import { getTodoItems, putTodoItems } from "../../../util/api/project/index.js";

function List({project_id}) {

  const [items,setitems] = useState([]);


  useEffect(()=> {
    (
      async () => {
        await getTodoItems(project_id)
        .then((res) => {
          let arr = []
          arr = res.data.results
          setitems([...arr])
        })

        await putTodoItems()
      }
    )();


  }, [setitems])

  console.log(items)

  return(
    <>
    <div className='TodoList'>
    {
      items.map((item) => {
        return (
          <Item text={item.content} done={item.completed} id={item.id}/>
        )
      })
    }
    </div>
    </>
  )
}

export default List;