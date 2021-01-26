import React from 'react';
import { BrowserRouter as Router,Route, Switch, useRouteMatch } from 'react-router-dom';

import Music from '../../components/Sound/Music'
import Progressbar from '../../components/Progressbar';
import DialogBox from '../../components/DialogBox';
import Map from './Map';
import MenuMap from './MenuMap'
import './Explore.css';
import { userContext } from '../../context/userContext';
import styled from 'styled-components'

const Main = styled.div`
  position: relative;
  margin: auto;
  padding-bottom: 1%;
  overflow: hidden;
  // border: solid violet;
  * {
    // border: solid green;
  }
`

const MapWrapper = styled.div`
  position: relative;
 // border: solid gold;
`

function Explore() {
  
  const { path } = useRouteMatch();
  return (
    <Main>
      <userContext.Consumer>
        {
          (user) => <Progressbar {...user}/>
        }
      </userContext.Consumer>
      <MapWrapper>
        <Map>
        <Router>
          <Switch>
            <Route exact path = {path} component = { MenuMap }/>
            <Route path = {`${path}/chapter-1`} component = { DialogBox } />
            <Route path = {`${path}/chapter-2`} />
            <Route path = {`${path}/chapter-3`} />
            <Route path = {`${path}/chapter-4`} />
            <Route path = {`${path}/chapter-5`} />
          </Switch>
        </Router>
        {/* <DialogBox /> */}
      </Map>
      </MapWrapper>
      <Music url="https://www.mboxdrive.com/bgm.mp3"/>
    </Main>
  );
}

export default Explore;