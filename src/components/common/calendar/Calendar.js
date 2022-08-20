import React, { useState } from "react";
import Calendar from 'react-calendar';
import moment from "moment";
import '../../../styles/Calendar.scss';

const ProjectCalendar = ({className}) => {
  const [value, setValue] = useState(new Date());

  return(
    <>
      <Calendar
        className={className}
        onChange={setValue}
        formatDay={(locale, date) => moment(date).format("D")}
        value={value}
        locale="en-GB"
        next2Label={null}
        prev2Label={null}
      />
    </>
  );
};

export default ProjectCalendar;