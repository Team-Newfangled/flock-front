import { authAPI } from "../../../lib/API";

export const getDeadline = (projectId, year, month) => {
  const res = authAPI.get(`/projects/${projectId}/deadline?year=${year}&month=${month}`)
  return res;
};

export const changeDeadlineColor = ({projectId, todoId, color}) => {
  const res = authAPI.put(`/projects/${projectId}/deadline/${todoId}`,{
    content: color,
  });
  return res; 
};

export const putTodo = ({Id, content, startDate, endDate}) => {
  const res = authAPI.put(`/todo/${Id}`,{
    content: content,
    "end-date": endDate,
    "start-date": startDate
  });
  return res;
};