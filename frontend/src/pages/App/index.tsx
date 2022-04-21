import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'

import NavigationBar from '@components/NavigationBar';
import Routes from '@route/index'

import '@styles/App.css';
import { Iuser } from '@src/type.modal';

import axios from '@config/axiosconfig';
import { userContext } from '@context/userContext';

function App() {

  const [user, setUser] = useState<Iuser>({
    loginStatus: false
  });

  const providerValue = {user,setUser}

  useEffect(()=>{
    axios.get(`/fetch`)
    .then(res => {
      if (res.data.info !== undefined) {
        setUser( () => ({
          loginStatus: true,
          type: res.data.type,
          name: res.data.name,
          image: res.data.image,
          chapter: res.data.info.chapter,
          unit: res.data.info.unit,
          star: res.data.info.star,
          highscore: res.data.info.highscore
        }));
      }
    })
    .catch(error =>{
      if(error.response.status === 401) {
        console.log("unauthorized");
      } else {
        console.error(error);
      }
    })
  },[])

  return (
    <div className="App">
      <userContext.Provider value={providerValue}>
        <BrowserRouter>
            <NavigationBar />
          <Routes />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
