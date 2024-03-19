import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

authInstance.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem('Authorization');
  console.log(`Authorization:${token}`);
  config.headers.Authorization = `${token}`;
  return config;
});

export const instance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});
