import { API } from "../../../lib/API";

export const getDeadline = async(projectId) => {
  await API.get(`projects/${projectId}/deadline`)
};

export const changeDeadlineColor = async({projectId, todoId, color}) => {
  await API.patch(`projects/${projectId}/deadline/${todoId}`,{
    content: color,
  });
};