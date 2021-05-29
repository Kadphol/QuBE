import React, { Suspense } from 'react';
import { Route, useHistory } from 'react-router-dom';
import {userContext} from '@context/userContext';
import LoginModal from '@components/LoginModal';
import Loader from '@components/Loader';

const Home = React.lazy(() => import('../pages/Home'));
const Explore = React.lazy(() => import('../pages/Explore'));
const Playground = React.lazy(() => import('../pages/Playground'));
const Challenge = React.lazy(() => import('../pages/Challenge'));


export default function Routes() {

  const history = useHistory()

  return (
    <userContext.Consumer>
      {({user})=>
      <Suspense fallback={<Loader/>}>
          <Route path="/" exact component={ Home } />
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
      </Suspense>
      }
    </userContext.Consumer>
  )
}