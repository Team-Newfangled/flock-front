import React from "react";
import { 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek,
  addDays,
  format,
  isSameDay,
  parseISO,
  isSameMonth
} from "date-fns";

const Cells = ({ currentMonth, nowDate}) => {
  const startMonth = startOfMonth(currentMonth, {weekStartsOn: 1});
  const endMonth = endOfMonth(startMonth, {weekStartsOn: 1});
  const startDate = startOfWeek(startMonth, {weekStartsOn: 1});
  const endDate = endOfWeek(endMonth, {weekStartsOn: 1});

  const scheduleStartDate = parseISO("2022-09-08")
  const scheduleEndDate = parseISO("2022-09-10")

  let rows = [];
  let days = [];
  let day = startDate;
  let isSchedule = false;
  let isStart = false;
  let isMid = false;
  let isEnd = false;
  
  while (day <= endDate || rows.length < 6){
    for(let i=0; i<7; i++){
      if(format(scheduleStartDate, 'yyyy/MM/dd') === format(day, 'yyyy/MM/dd')){
        isStart = true;
        isSchedule = true;
      }else if (format(scheduleEndDate, 'yyyy/MM/dd') === format(day, 'yyyy/MM/dd')) {
        isMid = false;
        isEnd = true;
      }else{
        isStart = false
        isMid = true
      }
      
      days.push(
        <div key={day} className={`cell${
                                isSameDay(day, nowDate)
                                ? ' selected'
                                :
                                format(currentMonth, 'M') !== format(day, 'M') 
                                ? ' different' 
                                : ''
                                }`}>
          <span>{format(day, 'd')}</span>
          { isSchedule
          ? <div className={`schedule${
                            format(scheduleStartDate, 'yyyy/MM/dd') === format(scheduleEndDate, 'yyyy/MM/dd')
                            ? ''
                            : isStart 
                            ? ' start'
                            : isMid
                            ? ' mid'
                            : isEnd
                            ? ' end'
                            : ''
          }`}></div>
          : null
          }
        </div>,
      )
      if(format(scheduleEndDate, 'yyyy/MM/dd') === format(day, 'yyyy/MM/dd')){
        isSchedule = false
        isEnd = false
      }
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