import React from "react";
import styled from 'styled-components';
import Item from "./Item.js";
import '../../../styles/Todo.scss'
 
const TodoList = styled.div`
    position: relative;
    top: 6%;
    width: 90%;
    height: 64%;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 14px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #004DA780;
      border-radius: 10px;
      background-clip: padding-box;
    }
    ::-webkit-scrollbar-track {
      background-color: #fff;
      border-radius: 10px;
    }
`;



function List() {
  return(
    <>
    <TodoList>
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
    </TodoList>
    </>
  )
}

export default List;