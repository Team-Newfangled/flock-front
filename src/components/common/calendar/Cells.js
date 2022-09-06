import React from "react";
import { 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek,
  addDays,
  format
} from "date-fns";

const Cells = ({ currentMonth, onDateClick}) => {
  const startMonth = startOfMonth(currentMonth, {weekStartsOn: 1});
  const endMonth = endOfMonth(startMonth, {weekStartsOn: 1});
  const startDate = startOfWeek(startMonth, {weekStartsOn: 1});
  const endDate = endOfWeek(endMonth, {weekStartsOn: 1});

  let rows = [];
  let days = [];
  let day = startDate;
  while (day <= endDate || rows.length < 6){
    for(let i=0; i<7; i++){
      days.push(
        <div className={`cell${format(currentMonth, 'M') !== format(day, 'M') ? ' different' : ''}`} key={day}>
          <span>{format(day, 'd')}</span>
        </div>,
      )
      day = addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day}>
        {days}
      </div>,
    )
    days = []
  }

  return(
    <div className="cells">
      {rows}
    </div>
  )
}

export default Cells;