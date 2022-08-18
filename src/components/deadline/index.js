import React from "react";
import ProjectCalendar from "../common/calendar/Calendar";
import Header from "../header/ProjectHeader";

const Deadline = () => {
  return(
    <>
      <Header title="데드라인"/>
      <ProjectCalendar/>
    </>
  );
};

export default Deadline;