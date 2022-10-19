import React from "react";
import '../../../styles/Todo.scss';
import { createTodoItems } from "../../../util/api/project";

function Head({project_id}) {
  return(
    <>
    <div className="headBlock">
      <h1 className="todoH1">TO-DO!</h1>
      <input className="plus" type='text' placeholder='할 일을 적어주세요'/>
      <button className="plusBtn" onClick = {
        (
          async () => {
            await createTodoItems(project_id,document.getElementsByClassName('plus')['0']['value']);
          }
        )
      }
      >
      <img src={require('../../../images/Add.svg').default}/></button>
    </div>
    </>
  )
}

export default Head;