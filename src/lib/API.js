import axios from "axios";

export const authAPI = axios.create({
  timeout: 1500,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`
  }
});

// authAPI.interceptors.response.use((res) => {
//     return res
//   },
//   async(err) => {
//     const {config, response: { status } } = err;
//     if (status === 401){
//       const originalRequest = config;
//       const refresh_token = localStorage.getItem('refresh_token')
//       const { data } = await axios.post('/auth/refresh',
//       {
//         refresh_token: refresh_token
//       },{
//         headers: {
//           'Content-Type': 'application/json'
//       }})

//       localStorage.setItem('access_token', data.access_token);
//       axios.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
//       originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
      
//       return authAPI(originalRequest);
//     }
//   }
// );

