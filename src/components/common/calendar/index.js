import React, { useState, useEffect } from "react";
import { subMonths, addMonths } from "date-fns";
import Header from "./Header";
import Cells from "./Cells";
import Days from "./Days";
import "../../../styles/Calendar.scss";
import { getState, initialState } from "../../../store/deadline/deadlineData";
import { getDeadline } from "../../../util/api/deadline";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";


const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [nowDate, setNowDate] = useState(new Date());

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const res = await getDeadline(location.pathname.split('/')[2],nowDate.getFullYear(),currentMonth.getMonth() + 1);
      if(res.data.results.length !== 0){
        dispatch(getState(res.data.results))
      }else {
        dispatch(getState(initialState.results))
      }
    })();
  }, [nowDate, currentMonth])

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  }

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  }

  return (
    <div className="calendar">
      <Header 
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <Days />
      <Cells 
        currentMonth={currentMonth}
        nowDate={nowDate}
      />
    </div>
  )
}

export default Calendar;