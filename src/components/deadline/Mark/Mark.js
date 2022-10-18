import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { changeDeadlineColor } from "../../../util/api/deadline";

const Mark = () => {
  const todos = useSelector((state) => state.deadline.results);
  console.log(todos[0].color)
  const [currentColor, setCurrentColor] = useState(todos[0].color)
  const [color, setColor] = useState(todos[0].color);
  const [startDate, setStartDate] = useState(todos[0]["start-date"]);
  const [endDate, setEndDate] = useState(todos[0]["end-date"]);
  const [content, setContent] = useState(todos[0].content);
  const [isPicker, setIsPicker] = useState(false);
  const params = useParams()

  const pickerHandler = () => setIsPicker(!isPicker);

  const changePreview = (content, color, start, end) => {
    setStartDate(start)
    setEndDate(end)
    setColor(color)
    setCurrentColor(color)
    setContent(content)
  }

  const changeMark = async() => {
    const res = await changeDeadlineColor(params.project_id, color, endDate, startDate);
    console.log(res)
  }

  return(
    <div className="mark">
      <div className="deadline-list">
        {todos[0].color && todos.map((todo, index) => {
        return(
          <div className="deadline" key={index} onClick={() => changePreview(todo.content, todo.color, todo["start-date"], todo["end-date"])}>
            <div className="title">
              <h2>{todo.content}</h2>
              <div style={{ width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: "#" + todo.color}}>
              </div>
            </div>
            <p>{todo["start-date"]} ~ {todo["end-date"]}</p>
          </div>
        )})}
        {!todos[0].color && 
          <div className="addDeadline">
            <div className="addContent">
              <div className="deadline-add-box">
                To-do에서 할 일을<br/> 추가해주세요!
              </div>
            </div>
          </div>
        }
      </div>
      <div className="change-deadline">
        {todos[0].color ? 
        <>
          <h2>{content || "팀원 명"}</h2>
          <div 
              className="preview" 
              onClick={pickerHandler} 
              style={{background: `linear-gradient(90deg, #${color || "78B3F9"} 0%, #${currentColor || "8DF1CD"} 100%)`}}>
          </div>
          <div className="picker" style={{display: isPicker ? '' : 'none'}}> 
            <button className="close" onClick={pickerHandler}/>
            <ChromePicker
              color={color}
              onChange={color => { 
                const colorhex = color.hex.split('#')[1]
                setColor(colorhex) 
              }}
            />
          </div>
          <div className="change-date">
            <h4>날짜</h4>
            <div className="day">
              <input className="date-input" value={startDate}/>
              <span>~</span>
              <input className="date-input" value={endDate}/>
            </div>
            <button className="change" onClick={changeMark}>완료</button>
          </div>
        </>
        : 
        <div className="addContent">
          <div className="deadline-add-box">
            To-do에서 할 일을<br/> 추가해주세요!
          </div>
        </div>
        }    
      </div>
    </div>
  );
};

export default Mark;