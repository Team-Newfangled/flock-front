import React, { useEffect, useState } from "react";
import Item from "./Item.js";
import '../../../styles/Todo.scss'
import { getTodoItems } from "../../../util/api/project/index.js";
import { useParams } from "react-router-dom";

function List() {

  let [items,setitems] = useState([])

  const params = useParams();

  // useEffect(()=> {
  //   setitems([...getTodoItems(params.project_id)])
  // }, [params])

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