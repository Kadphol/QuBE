import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import axios, { AxiosRequestConfig, AxiosInstance} from 'axios'

import NavigationBar from '../../components/NavigationBar';
import Routes from '../../routing'

import '../../styles/App.css';
import { Iuser } from '../../type.modal'

function App() {

  const [user, setUser] = useState<Iuser>({
    loginStatus: false
  })

  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true
  }

  const instance: AxiosInstance = axios.create(config)

  instance.get('http://localhost/fetch')
    .then(res => {
      if (res.data) {
        setUser( prevState => ({
          loginStatus: true,
          name: res.data.name,
          image: res.data.image,
        }));
      }
    })

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar name={user.name} loginStatus={user.loginStatus} image={user.image}/>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
