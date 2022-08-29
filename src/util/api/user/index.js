import { API } from "../../../lib/API"

export const login = async(body) => {
  await API.post('redirect/oauth2', body);
}