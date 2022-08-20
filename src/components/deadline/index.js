import React from "react";
import ProjectCalendar from "../common/calendar/Calendar";
import Header from "../header/ProjectHeader";
import "../../styles/deadline.scss";

const Deadline = () => {
  return(
    <>
      <Header title="데드라인"/>
      <ProjectCalendar className="deadline-calendar"/>
    </>
  );
};

export default Deadline;