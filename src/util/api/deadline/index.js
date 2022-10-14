import { authAPI } from "../../../lib/API";

export const getDeadline = async(projectId, year, month) => {
  const res = await authAPI.get(`/projects/${projectId}/deadline?year=${year}&month=${month}`)
  return res;
};

export const changeDeadlineColor = async({projectId, todoId, color}) => {
  await authAPI.patch(`projects/${projectId}/deadline/${todoId}`,{
    content: color,
  });
};