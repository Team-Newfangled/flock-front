import React, { useEffect, useState } from "react";
import Item from "./Item.js";
import '../../../styles/Todo.scss'
import { getTodoItems } from "../../../util/api/project/index.js";
import { useParams } from "react-router-dom";

function List() {

  const [items,setitems] = useState([]);

  const params = useParams();

  useEffect(()=> {
    (
      async () => {
        await getTodoItems(params.project_id)
        .then((res) => {
          let arr = []
          arr = res.data.results
          console.log(res)
          setitems([...arr])
        })
      }
    )();
  }, [params])

  return(
    <>
    <div className='TodoList'>
    {
      items.map((item) => {
        return (
          <Item text={item.content} done={item.completed}/>
        )
      })
    }
    </div>
    </>
  )
}

export default List;