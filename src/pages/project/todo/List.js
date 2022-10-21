import React, { useEffect, useState } from "react";
import Item from "./Item.js";
import '../../../styles/Todo.scss'
import { getTodoItems } from "../../../util/api/project/index.js";

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
      }
    )();


  }, [setitems])


  return(
    <>
    <div className='TodoList'>
    {
      items.map((item, i) => {
        return (
          <Item text={item.content} done={item.completed} id={item.id} key={i}/>
        )
      })
    }
    </div>
    </>
  )
}

export default List;