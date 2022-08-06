import axios from "axios";

export const API = axios.create({
  baseURL: 'http://localhost:3000/users/',
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    // "Authorization": `Bearer ${localStorage.getItem()}`,
  },
});