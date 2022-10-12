import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Deadline from "../../components/deadline";
import { getState } from "../../store/deadline/deadlineData";
import { getDeadline } from "../../util/api/deadline";

const DeadlinePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const res = await getDeadline();
      dispatch(getState(res))
    })();
  }, [])
  return(
    <Deadline />
  );
};

export default DeadlinePage;