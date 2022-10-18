import axios from "axios";
import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { changeDeadlineColor, putTodo } from "../../../util/api/deadline";

const Mark = () => {
  const todos = useSelector((state) => state.deadline.results);
  const [todoId, setTodoId] = useState(todos[0].id);
  const [currentColor, setCurrentColor] = useState(todos[0].color);
  const [color, setColor] = useState(todos[0].color);
  const [startDate, setStartDate] = useState(todos[0]["start-date"]);
  const [endDate, setEndDate] = useState(todos[0]["end-date"]);
  const [content, setContent] = useState(todos[0].content);
  const [isPicker, setIsPicker] = useState(false);
  const params = useParams()

  const onChangeStartDate = (e) => setStartDate(e.target.value);
  const onChangeEndDate = (e) => setEndDate(e.target.value);

  const pickerHandler = () => setIsPicker(!isPicker);

  const changePreview = (id, content, color, start, end) => {
    setTodoId(id);
    setStartDate(start);
    setEndDate(end);
    setColor(color);
    setCurrentColor(color);
    setContent(content);
  };

  const changeMark = () => {
    axios.all([putTodo(params.project_id, todoId, color), changeDeadlineColor(params.project_id, content, endDate, startDate)])
    .then(axios.spread((res1, res2) => {
      console.log(res1)
      console.log(res2)
    }))
    .catch((err) => { console.log(err)})
  }

  return(
    <div className="mark">
      <div className="deadline-list">
        {todos[0].color && todos.map((todo, index) => {
        return(
          <div className="deadline" key={index} onClick={() => changePreview(todo.id, todo.content, todo.color, todo["start-date"], todo["end-date"])}>
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
              <input className="date-input" value={startDate} onChange={onChangeStartDate}/>
              <span>~</span>
              <input className="date-input" value={endDate} onChange={onChangeEndDate}/>
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