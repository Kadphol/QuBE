import React,{useState} from 'react';
import { Route, useHistory } from 'react-router-dom';

import Home from '../pages/Home';
import Explore from '../pages/Explore';
import Playground from '../pages/Playground';
import Challenge from '../pages/Challenge'
import {userContext} from '../context/userContext'
import LoginModal from '../components/LoginModal'

export default function Routes() {

  const history = useHistory()

  return (
    <userContext.Consumer>
      {({user})=>
      <React.Fragment>
      <Route path="/" exact component={ Home } />
<<<<<<< HEAD
      <Route path="/explore"    render={()=>user.loginStatus
                                          ?<Explore/>
                                          :<LoginModal show 
                                            onHide={()=>{history.goBack()}}/>}/>
      <Route path="/playground" render={()=>user.loginStatus
                                          ?<Playground/>
                                          :<LoginModal show 
                                            onHide={()=>{history.goBack()}}/>}/>
      <Route path="/challenge"  render={()=>user.loginStatus
                                          ?<Challenge/>
                                          :<LoginModal show 
                                            onHide={()=>{history.goBack()}}/>}/>
      </React.Fragment>
      }
    </userContext.Consumer>
=======
      <Route path="/explore" component={ Explore }/>
      <Route path="/playground" exact component={ Playground }/>
      <Route path="/challenge" component={ Challenge }/>
    </>
>>>>>>> 4719a703c12f24615a059db4db2e0b68f6377d0e
  )
}