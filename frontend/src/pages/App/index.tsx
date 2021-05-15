import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'

import NavigationBar from '@components/NavigationBar';
import Routes from '@route/index'

import '@styles/App.css';
import { Iuser } from '@src/type.modal';

import axios from '@config/axiosconfig';
import { userContext } from '@context/userContext';
import PreSurvey from '@components/Survey/Presurvey'
import PostSurvey from '@components/Survey/Postsurvey'

function App() {

  const [user, setUser] = useState<Iuser>({
    loginStatus: false
  })

  const [preSurveyShow,changePreSurveyShow] = useState(false)
  const [postSurveyShow,changePostSurveyShow] = useState(false)

  const providerValue = {user,setUser}

  useEffect(()=>{
    axios.get(`/fetch`)
    .then(res => {
      //console.log(res.data);
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
      if (res.data.preSurvey.degree === 0){changePreSurveyShow(true)}
      if (res.data.postSurvey.satisfy === 0 && res.data.info.highscore !== 0){changePostSurveyShow(true)}
    })
    .catch(error =>{
      console.log(error);
    })
  },[])

  return (
    <div className="App">
      {/* <PreSurvey show={preSurveyShow} onHide={() => changePreSurveyShow(false)} />
      <PostSurvey show={postSurveyShow} onHide={() => changePostSurveyShow(false)} /> */}
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
