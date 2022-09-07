import React from "react";
import Header from "../header/ProjectHeader";
import "../../styles/deadline.scss";
import Mark from "./Mark/Mark";
import Calendar from "../common/calendar";

const Deadline = () => {
  return(
    <>
      <Header title="데드라인"/>
      <main style={{
                    position: 'relative',
                    height: '92vh'
                  }}>
        <Calendar />
        <Mark />
      </main>
    </>
  );
};

export default Deadline;