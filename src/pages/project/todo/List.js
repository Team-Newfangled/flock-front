import React, { useEffect, useState } from "react";
import Item from "./Item.js";
import '../../../styles/Todo.scss'
import axios from "axios";
import IP from "../../../CommonIp.js";

function List() {

  let [items,setitems] = useState([])

  useEffect(( )=>{
    const getitem = () => {
      axios.get(
        IP
      )
      .then((response) => {
        setitems([...response])
      })
      .catch((error) => {
        console.log(error)
      })
    }
    getitem()
  },[])

  return(
    <>
    <div className='TodoList'>
      <Item text="메롱" done={true}/>
      <Item text="커밋" done={false}/>
      <Item text="커밋" done={false}/>
      <Item text="커밋" done={false}/>
      <Item text="커밋" done={false}/>
      <Item text="커밋" done={false}/>
      <Item text="커밋" done={false}/>
      <Item text="야!" done={true}/>
      <Item text="야!" done={true}/>
      <Item text="야!" done={true}/>
    </div>
    </>
  )
}

export default List;