import React from "react";
import { 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek,
  addDays,
  format,
  isSameDay,
  parseISO
} from "date-fns";
import { useSelector } from "react-redux";

const Cells = ({ currentMonth, nowDate}) => {
  const deadline = useSelector((state) => state.deadline.results);
  const startMonth = startOfMonth(currentMonth, {weekStartsOn: 1});
  const endMonth = endOfMonth(startMonth, {weekStartsOn: 1});
  const startDate = startOfWeek(startMonth, {weekStartsOn: 1});
  const endDate = endOfWeek(endMonth, {weekStartsOn: 1});
  
  let scheduleStartDate = "";
  let scheduleEndDate = "";
  let color = "";

  let rows = [];
  let days = [];
  let day = startDate;
  let isSchedule = false;
  let isStart = false;
  let isMid = false;
  let isEnd = false;

  while (day <= endDate || rows.length < 6){
    for(let i=0; i<7; i++){
      for(let j=0; j<deadline.length; j++){
        scheduleStartDate = parseISO(deadline[j]["start-date"])
        scheduleEndDate = parseISO(deadline[j]["end-date"])
        if(!Number.isNaN(new Date(scheduleEndDate).getTime())){
          if(format(scheduleStartDate, 'yyyy/MM/dd') === format(day, 'yyyy/MM/dd')){
            isStart = true;
            isSchedule = true;
            color = deadline[j].color
            break;
          }else if (format(scheduleEndDate, 'yyyy/MM/dd') === format(day, 'yyyy/MM/dd')) {
            isStart = false;
            isMid = false;
            isEnd = true;
            color = deadline[j].color
            break;
          }else{
            isStart = false
            isMid = true
          }
        }
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
          }`} style={{backgroundColor: `#${color}`}}></div>
          : null
          }
        </div>,
      )
      if(!Number.isNaN(new Date(scheduleEndDate).getTime()) && format(scheduleEndDate, 'yyyy/MM/dd') === format(day, 'yyyy/MM/dd')){
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