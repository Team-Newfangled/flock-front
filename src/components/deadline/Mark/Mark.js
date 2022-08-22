import React, { useState } from "react";
import { ChromePicker } from "react-color";
import todos from "./data.json";

const Mark = () => {
  const [color, setColor] = useState('#8DF1CD');
  const [isPicker, setIsPicker] = useState(true);

  const pickerHandler = () => setIsPicker(!isPicker);

  return(
    <div className="mark">
      <div className="deadline-list">
        {todos.map((todo) => {
        return(
          <div className="deadline" key={todo.id}>
            <div className="title">
              <h2>{todo.name}</h2>
              <div style={{ width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: todo.color}}>
              </div>
            </div>
            <p>{todo["start-date"]} ~ {todo["end-date"]}</p>
          </div>
        )})}
      </div>
      <div className="change-deadline">
          <h2>팀원 명</h2>
          <div 
              className="preview" 
              onClick={pickerHandler} 
              style={{backgroundColor: color}}>
          </div>
          <div className="picker" style={{display: isPicker ? '' : 'none'}}> 
            <button className="close" onClick={pickerHandler}/>
            <ChromePicker
              color={color}
              onChange={color => setColor(color.hex)}
            />
          </div>
          <div className="change-date">
            <h4>날짜</h4>
          </div>
      </div>
    </div>
  );
};

export default Mark;