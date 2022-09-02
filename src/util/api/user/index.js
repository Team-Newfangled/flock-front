import axios from "axios";
import { authAPI } from "../../../lib/API";

const user_id = localStorage.getItem('user_id');

export const login = async(code) => {
    const res = await axios.get(`auth/oauth?code=${code}`)
    return res;
};

export const changeFile = async(file) => {
  const formdata = new FormData();
  formdata.append('uploadImage,', file);

  const config = {
    Headers: {
      'content-type': 'multipart/form-data',
    },
  };
  
  const res = await authAPI.patch(`users/${user_id}/picture`, formdata, config);
  return res;
};

export const changeName = async(name) => {
  const res = await authAPI.patch(`users/${user_id}/name`,{
    name: name,
  })
  return res;
};

export const changeCompany = async(company) => {
  const res = await authAPI.patch(`users/${user_id}/organizaion`,{
      name: company,
  })
  return res;
};
