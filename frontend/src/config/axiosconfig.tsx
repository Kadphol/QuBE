import axios, {AxiosInstance,AxiosRequestConfig} from 'axios'

const config: AxiosRequestConfig = {
    headers: {'Content-Type': 'application/json'},
    withCredentials: true,
    baseURL: "http://localhost:8080/api"
  }
  
const instance: AxiosInstance = axios.create(config);

export default instance