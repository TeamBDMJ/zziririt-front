import axios from 'axios';

export const authInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Credentials': true,
    // 'Content-Type': 'application/json',
    // 'Authorization': localStorage.getItem('Authorization')
  },
  withCredentials: true,
});

authInstance.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem('Authorization');
  config.headers.Authorization = `${token}`;
  return config;
});

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
