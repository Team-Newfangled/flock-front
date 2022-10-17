import { authAPI } from "../../../lib/API";

export const getDeadline = async(projectId, year, month) => {
  const res = await authAPI.get(`/projects/${projectId}/deadline?year=${year}&month=${month}`)
  return res;
};

export const changeDeadlineColor = async({Id, color, startDate, endDate}) => {
  await authAPI.put(`/todo/${Id}`,{
    content: color,
    "end-date": endDate,
    "start-date": startDate
  });
};