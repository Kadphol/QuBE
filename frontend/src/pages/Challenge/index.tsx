import React from 'react';
import Play from './Play'
import Leaderboard from './Leaderboard'
import Menu from './Menu'
import HowToplay from './Howtoplay'
import { userContext } from '@context/userContext';
import styled from 'styled-components'
import scene1 from '@assets/challenge/backgroundFar.png'
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';

const Wrapper = styled.div`
  background-image: url(${scene1});
  height: 720px;
  width: 1240px;
  margin: 60px auto 20px;
  display:flex;
  position: relative;
`
export default function Challenge() {

  const { path } = useRouteMatch();

  return (
    <Wrapper>
      <Router>
      <userContext.Consumer>
            { ({user,setUser}) =>
        <Switch>
          <Route exact path={path} component={Menu} />
            <Route path={`${path}/play`} render={() => (<Play user={user} setUser={setUser} />)}/>
            <Route path={`${path}/leaderboard`} render={() => (<Leaderboard user={user} />)} />
            <Route path={`${path}/howtoplay`} component={HowToplay}/>
        </Switch>
            }
        </userContext.Consumer>
      </Router>
    </Wrapper>
  );
}