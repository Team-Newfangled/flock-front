import React from "react";
import ProjectCalendar from "../common/calendar/Calendar";
import Header from "../header/ProjectHeader";
import "../../styles/deadline.scss";
import Mark from "./Mark/Mark";

const Deadline = () => {
  return(
    <>
      <Header title="데드라인"/>
      <ProjectCalendar className="deadline-calendar"/>
      <Mark />
    </>
  );
};

export default Deadline;