import axios from "axios";

export const API = axios.create({
  baseURL: 'http://10.80.161.198:8080/',
  timeout: 5000,
});