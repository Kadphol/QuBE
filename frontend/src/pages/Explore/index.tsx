import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';

import Music from '../../components/Button/Music'
import Progressbar from '../../components/Progressbar';
import DialogBox from '../../components/DialogBox';
import Map from './Map'
import MenuChapter from './MenuChapter'
import './Explore.css';
import { userContext } from '../../context/userContext';
import styled from 'styled-components'
import Chapter1 from './Chapter1'
import Chapter2 from './Chapter2'

const Main = styled.div`
  height: 100%;
  position: relative;
  margin: auto;
  padding-bottom: 1%;
  overflow: hidden;
`

const MapWrapper = styled.div`
  position: relative;
`

function Explore() {

  const { path } = useRouteMatch();
  return (

    <Main>
      <userContext.Consumer>
        {({user,setUser}) =>
          <React.Fragment>
            <Progressbar {...user} />
            <MapWrapper>
              <Map>
                <BrowserRouter>
                  <Router>
                    <Switch>
                      <Route exact path={path} render={() => <MenuChapter {...user} />} />
                      <Route path={`${path}/chapter-1`} component={Chapter1} />
                      <Route path={`${path}/chapter-2`} component={Chapter2} />
                      <Route path={`${path}/chapter-3`} />
                      <Route path={`${path}/chapter-4`} />
                      <Route path={`${path}/chapter-5`} />
                    </Switch>
                  </Router>
                </BrowserRouter>
                {/* <Music url="https://www.mboxdrive.com/bgm.mp3" /> */}
              </Map>
            </MapWrapper>
          </React.Fragment>
        }
      </userContext.Consumer>
    </Main>

  );
}

export default Explore;