import React from "react";

const Days = () => {
  const date = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

  return(
    <div className="days">
      {date.map((date) => {
        return(
          <div className="col" key={date}>
            {date}
          </div>
        )})}      
    </div>
  )
}

export default Days;