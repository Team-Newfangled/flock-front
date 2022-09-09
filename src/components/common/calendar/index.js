import React, { useState } from "react";
import { subMonths, addMonths } from "date-fns";
import Header from "./Header";
import Cells from "./Cells";
import Days from "./Days";
import "../../../styles/Calendar.scss";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [nowDate, setNowDate] = useState(new Date());

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