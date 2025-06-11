import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // Adjust if your backend uses different port
});

export default instance;
