import axios from 'axios';

const { REACT_APP_BASE_URL_API } = process.env;

const api = axios.create({
  baseURL: REACT_APP_BASE_URL_API,
  timeout: 3000
});

export default api;