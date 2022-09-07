import React, { useState } from "react";
import { ChromePicker } from "react-color";
import todos from "./data.json";

const Mark = () => {
  const [currentColor] = useState('#8DF1CD')
  const [color, setColor] = useState('#8DF1CD');
  const [isPicker, setIsPicker] = useState(false);

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
              style={{background: `linear-gradient(90deg, ${color} 0%, ${currentColor} 100%)`}}>
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
            <div className="day">
              <input className="date-input" value={"2022/05/04"}/>
              <span>~</span>
              <input className="date-input" value={"2022/05/04"}/>
            </div>
            <button className="change">완료</button>
          </div>
      </div>
    </div>
  );
};

export default Mark;