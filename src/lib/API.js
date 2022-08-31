import axios from "axios";

const baseURL = 'http://10.80.161.198:8080/';

export const API = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

export const authAPI = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`
  }
});

authAPI.interceptors.response.use((res) => {
    return res
  },
  async(err) => {
    const {config, response: { status },} = err;
    if (status === 401){
      const originalRequest = config;
      const refresh_token = localStorage.getItem('refresh_token')
      const { data } = await API.post('/auth/refresh',
      {
        refresh_token: refresh_token
      },{
        headers: {
          'Content-Type': 'application/json'
      }})

      localStorage.setItem('access_token', data.access_token);
      axios.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
      originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
      
      return authAPI(originalRequest);
    }
  }
);

