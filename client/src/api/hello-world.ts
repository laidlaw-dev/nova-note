import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const helloWorld = async () => {
  const response = await axios.get(`${API_URL}/hello`);
  return response.data;
};
