import React, { useState } from "react";
import Calendar from 'react-calendar';
import moment from "moment";
import '../../../styles/Calendar.scss';

const ProjectCalendar = () => {
  const [value, setValue] = useState(new Date());

  return(
    <>
      <Calendar
        onChange={setValue}
        formatDay={(locale, date) => moment(date).format("DD")}
        value={value}
        locale="en-GB"
      />
    </>
  );
};

export default ProjectCalendar;