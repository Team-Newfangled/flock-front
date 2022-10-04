import { authAPI } from "../../../lib/API";

export const getDeadline = async(projectId) => {
  await authAPI.get(`projects/${projectId}/deadline`)
    .then((res) => { return res })
    .catch((err) => { return err})
};

export const changeDeadlineColor = async({projectId, todoId, color}) => {
  await authAPI.patch(`projects/${projectId}/deadline/${todoId}`,{
    content: color,
  });
};