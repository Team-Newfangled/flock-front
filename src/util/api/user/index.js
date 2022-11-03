import axios from "axios";
import { authAPI } from "../../../lib/API";

const user_id = localStorage.getItem('user_id');

export const login = (code) => {
    return axios.get(`auth/oauth?code=${code}`)
};

export const changeFile = async(file) => {
  const config = {
    Headers: {
      'content-type': 'application/json',
    },
  };
  
  const res = await authAPI.patch(`users/${user_id}/picture`, {
    content: file
  }, config);
  return res;
};

export const changeName = async(name) => {
  const res = await authAPI.patch(`users/${user_id}/name`,{
    name: name,
  })
  return res;
};

export const changeCompany = async(company) => {
  const res = await authAPI.patch(`users/${user_id}/organization`,{
      name: company,
  })
  return res;
};

export const getUserInfo = async(user_id) => {
  const res = await authAPI.get(`/users/${user_id}`)
  return res
}

export const getNowTodo = (user_id, year, month, day) => {
  return authAPI.get(`/users/${user_id}/todo?year=${year}&month=${month}&day=${day}`)
}