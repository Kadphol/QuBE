import axios, {AxiosInstance,AxiosRequestConfig} from 'axios'

const config: AxiosRequestConfig = {
    headers: {'Content-Type': 'application/json'},
    withCredentials: true,
    baseURL: "http://68.183.155.239/api"
  }
  
const instance: AxiosInstance = axios.create(config);

export default instance