import React from "react";
import { format } from "date-fns";

const Header = ({ currentMonth, prevMonth, nextMonth }) => {
  return(
    <div className="calendar-header">
      <button className="prev-month" onClick={prevMonth}/>
      <div className="month">
        <span>{format(currentMonth, 'MMMM yyyy')}</span>
      </div>
      <button className="next-month" onClick={nextMonth}/>
    </div>
  )
}

export default Header;