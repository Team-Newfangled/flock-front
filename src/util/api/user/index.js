import { API } from "../../../lib/API"

export const login = async(code) => {
    const res = await API.get(`auth/oauth?code=${code}`)
    return res;
  };