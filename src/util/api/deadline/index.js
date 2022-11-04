import { authAPI } from "../../../lib/API";

export const getDeadline = (projectId, year, month) => {
  console.log(year, month)
  const res = authAPI.get(`/projects/${projectId}/deadline?year=${year}&month=${month}`)
  return res;
};

export const changeDeadlineColor = (projectId, todoId, color) => {
  const res = authAPI.patch(`/projects/${projectId}/deadline/${todoId}`,{
    content: color,
  });
  return res; 
};

export const putTodo = (Id, startDate, endDate) => {
  const res = authAPI.patch(`/todo/${Id}`,{
    "end_date": endDate,
    "start_date": startDate
  });
  return res;
};

export const patchContent = (Id, content) => {
  return authAPI.patch(`/todo/${Id}`, {
    content
  })
}