import axios from 'axios';
import { config } from '../config/config';

const instance = axios.create({
  baseURL: config.baseUrl,
  headers: {
    Authorization: `Bearer ${config.apiKey}`,
  },
});

export default instance;
