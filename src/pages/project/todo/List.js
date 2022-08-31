import React from "react";
import Item from "./Item.js";
import '../../../styles/Todo.scss'

function List() {
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