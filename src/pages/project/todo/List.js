import React, { useEffect, useState } from "react";
import Item from "./Item.js";
import '../../../styles/Todo.scss'
import axios from "axios";

function List() {

  let [items,setitems] = useState([])

  // useEffect(( )=>{
  //   const getitem = () => {
  //     axios.get(
  //       IP + '/projects' + 'id' + 'deadline'
  //     )
  //     .then((response) => {
  //       setitems([...response])
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  //   }
  //   getitem()
  // },[])

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