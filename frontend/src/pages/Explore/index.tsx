import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom'

import Progressbar from '@components/Progressbar'
import Map from './Map'
import MenuChapter from './MenuChapter'
import './Explore.css'
import { userContext } from '@context/userContext'
import styled from 'styled-components'
import Chapter1 from './Chapter1'
import Chapter2 from './Chapter2'
import Chapter3 from './Chapter3'
import Chapter4 from './Chapter4'
import Chapter5 from './Chapter5'

const Main = styled.div`
  height: 100%;
  position: relative;
  margin: auto;
  padding-bottom: 1%;
  overflow: hidden;
`

const MapWrapper = styled.div`
  position: relative;
  img {
  }
`

export default function Explore() {
  const { path } = useRouteMatch()

  return (
    <Main>
      <userContext.Consumer>
        {({ user, setUser }) => (
          <React.Fragment>
            <Progressbar {...user} />
            <MapWrapper>
              <Map>
                <Router basename="/game">
                  <Switch>
                    <Route
                      exact
                      path={path}
                      render={() => <MenuChapter {...user} />}
                    />
                    <Route
                      path={`${path}/chapter-1`}
                      component={Chapter1}
                    />
                    <Route
                      path={`${path}/chapter-2`}
                      component={Chapter2}
                    />
                    <Route
                      path={`${path}/chapter-3`}
                      component={Chapter3}
                    />
                    <Route
                      path={`${path}/chapter-4`}
                      component={Chapter4}
                    />
                    <Route
                      path={`${path}/chapter-5`}
                      component={Chapter5}
                    />
                  </Switch>
                </Router>
              </Map>
            </MapWrapper>
          </React.Fragment>
        )}
      </userContext.Consumer>
    </Main>
  )
}
