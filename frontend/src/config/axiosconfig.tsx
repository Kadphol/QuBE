import axios, {AxiosInstance,AxiosRequestConfig} from 'axios';
import endpoint from './endpoint';

const config: AxiosRequestConfig = {
  headers: {'Content-Type': 'application/json'},
  withCredentials: true,
  baseURL: `${endpoint.URL}/api`
}
  
const instance: AxiosInstance = axios.create(config);

export default instance;