import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'

import NavigationBar from '@components/NavigationBar';
import Routes from '@route/index'

import '@styles/App.css';
import { Iuser } from '@src/type.modal';

import axios from '@config/axiosconfig';
import ENDPOINT from '@config/endpoint';
import { userContext } from '@context/userContext';
import PreSurvey from '@components/Survey/Presurvey'

function App() {

  const [user, setUser] = useState<Iuser>({
    loginStatus: false
    //loginStatus: true
  })

  const [surveyShow,changeSurveyShow] = useState(false)
  const providerValue = {user,setUser}

  useEffect(()=>{
    axios.get(`${ENDPOINT.URL}/fetch`)
    .then(res => {
      console.log(res.data)
      if (res.data) {
        setUser( () => ({
          loginStatus: true,
          type: res.data.type,
          name: res.data.name,
          image: res.data.image,
          chapter: res.data.info.chapter,
          unit: res.data.info.unit,
          star: res.data.info.star,
          score: res.data.info.highscore
        }));
      }
      if (res.data.preSurvey.degree == 0){changeSurveyShow(true)}
    })
  },[])

  return (
    <div className="App">
      <PreSurvey show={surveyShow} onHide={() => changeSurveyShow(false)} />
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
