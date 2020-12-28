import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'

import NavigationBar from '../../components/NavigationBar';
import Routes from '../../routing'

import '../../styles/App.css';
import { Iuser } from '../../type.modal'

import axios from '../../axiosconfig'

function App() {

  const [user, setUser] = useState<Iuser>({
    loginStatus: false
  })

  useEffect(()=>{
    axios.get('http://localhost/fetch')
    .then(res => {
      console.log(res.data)
      if (res.data) {
        setUser( () => ({
          loginStatus: true,
          name: res.data.name,
          image: res.data.image,
          chpater: res.data.info.chapter,
          unit: res.data.info.unit,
          star: res.data.info.star,
          highscore: res.data.info.highscore
        }));
      }})
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar name={user.name} loginStatus={user.loginStatus} image={user.image} highscore={user.highscore}/>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
