import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom'
import background from '@assets/explore/chapter3/backgroundUnit.png'
import Back from '@components/Button/back'
import { userContext } from '../../../context/userContext'
import Intro from './Intro'
import Unit1 from './Unit1'
import Unit2 from './Unit2'
import Unit3 from './Unit3'
import Quiz from './Quiz'
import MenuUnitTemplate from '../Template/MenuUnitTemplate'
import Music from '@components/Button/Music'

const src = require('@assets/sound/bgm3.mp3').default

const main = {
  background: `url(${background})`,
  width: '100%',
  height: '100%',
  border: '1px solid rbga(0,0,0,0)',
  margin: '0px auto',
  position: 'relative',
  overflowX: 'hidden',
} as React.CSSProperties

export default function Chapter3() {
  const { path } = useRouteMatch()
  return (
    <div style={main}>
      <Back path="/explore" />
      <userContext.Consumer>
        {({ user, setUser }) => (
          <Router basename="/game/explore">
            <Switch>
              <Route
                path={`${path}/intro`}
                render={() => <Intro />}
              />
              <Route
                exact
                path={path}
                render={() => (
                  <MenuUnitTemplate
                    user={user}
                    detail={{
                      chapter: 3,
                      title: [
                        'มาตรวัด',
                        'มองผ่านคิวบิตที่โดดเดี่ยว',
                        'มองผ่านแก๊งของคิวบิต',
                        'เผชิญหน้ากับมังกร 3',
                      ],
                      titleEng: [
                        'Basis',
                        'Single Qubit Measurement',
                        'Multiple Qubit Measurement',
                        'Beat the Dragon III',
                      ],
                    }}
                  />
                )}
              />
              <Route
                path={`${path}/unit-1`}
                render={() => (
                  <Unit1
                    setUser={setUser}
                    user={user}
                  />
                )}
              />
              <Route
                path={`${path}/unit-2`}
                render={() => (
                  <Unit2
                    setUser={setUser}
                    user={user}
                  />
                )}
              />
              <Route
                path={`${path}/unit-3`}
                render={() => (
                  <Unit3
                    setUser={setUser}
                    user={user}
                  />
                )}
              />
              <Route
                path={`${path}/quiz`}
                render={() => (
                  <Quiz
                    setUser={setUser}
                    user={user}
                  />
                )}
              />
            </Switch>
            <Music url={src} />
          </Router>
        )}
      </userContext.Consumer>
    </div>
  )
}
