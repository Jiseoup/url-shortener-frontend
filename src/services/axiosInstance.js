import axios from 'axios';

// Create axios instance for API requests.
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export default instance;
