import axios, {AxiosInstance,AxiosRequestConfig} from 'axios'

const config: AxiosRequestConfig = {
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
  }
  
const instance: AxiosInstance = axios.create(config);

export default instance