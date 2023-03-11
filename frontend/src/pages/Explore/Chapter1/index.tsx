import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom'
import background from '@assets/explore/chapter1/BackgroundUnit.png'
import Back from '@components/Button/back'
import { userContext } from '@context/userContext'
import Intro from './Intro'
import Unit1 from './Unit1'
import Unit2 from './Unit2'
import Unit3 from './Unit3'
import Quiz from './Quiz'
import Music from '@components/Button/Music'
import MenuUnitTemplate from '../Template/MenuUnitTemplate'

const src = require('@assets/sound/bgm1.mp3').default

const main = {
  background: `url(${background})`,
  width: '100%',
  height: '100%',
  border: '1px solid rbga(0,0,0,0)',
  margin: '0px',
  position: 'relative',
} as React.CSSProperties

export default function Chapter1() {
  const { path } = useRouteMatch()
  console.log(path)

  return (
    <div style={main}>
      <Back path="/explore" />
      <userContext.Consumer>
        {({ user, setUser }) => (
          <Router basename="/game/explore/chapter-1">
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
                      chapter: 1,
                      title: [
                        'สวัสดี! คอมพิวเตอร์',
                        'รู้จักกับบิต',
                        'คอมพิวเตอร์ทำงาน!',
                        'เผชิญหน้ากับมังกร 1',
                      ],
                      titleEng: [
                        'Hello world!',
                        'Bit Representation',
                        'Computer System Process',
                        'Beat the dragon I',
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
