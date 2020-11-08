import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import axios, { AxiosRequestConfig, AxiosInstance} from 'axios'

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Home from '../Home';
import Explore from '../Explore';

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
        setUser({
          loginStatus: true,
          name: res.data.name,
          image: res.data.image,
          progress: res.data.progress
        });
      }
    })

  return (
    <div className="App">
      <div className="Navigation">
        <NavigationBar name={user.name} loginStatus={user.loginStatus} image={user.image} />
      </div>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/playground" />
        <Route path="/challenge" />
      </div>
    </div>
  );
}

export default App;
