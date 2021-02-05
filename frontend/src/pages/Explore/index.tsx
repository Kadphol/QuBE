import React, {useEffect,useState} from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';

import soundIcon from '../../assets/sound/soundIcon.png'
import useSound from 'use-sound'
import Sound from '../../components/Button/Music'
import Progressbar from '../../components/Progressbar';
import Map from './Map'
import MenuChapter from './MenuChapter'
import './Explore.css';
import { userContext } from '../../context/userContext';
import styled from 'styled-components'
import Chapter1 from './Chapter1'
import Chapter2 from './Chapter2'
const bgm1 = require('../../assets/sound/bgm1.mp3')
const bgm2 = require('../../assets/sound/sfx_clear.mp3')

const Main = styled.div`
  height: 100%;
  position: relative;
  margin: auto;
  overflow: hidden;
`

const MapWrapper = styled.div`
  position: relative;
  img {
  }
`

export default function Explore() {

  const { path } = useRouteMatch();
  const [src,setSrc] = useState(bgm1)

  return (

    <Main>
      <userContext.Consumer>
        {({ user, setUser }) =>
          <React.Fragment>
            <Progressbar {...user} />
            <MapWrapper>
              <Map>
                <BrowserRouter>
                  <Router>
                    <Switch>
                      <Route exact path={path} render={() => <MenuChapter {...user}/>} />
                      <Route path={`${path}/chapter-1`} component={Chapter1} />
                      <Route path={`${path}/chapter-2`} component={Chapter2} />
                      <Route path={`${path}/chapter-3`} />
                      <Route path={`${path}/chapter-4`} />
                      <Route path={`${path}/chapter-5`} />
                    </Switch>
                  </Router>
                </BrowserRouter>
              </Map>
            </MapWrapper>
          </React.Fragment>
        }
      </userContext.Consumer>
    </Main>

  );
}