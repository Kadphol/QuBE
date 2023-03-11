import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom'
import background from '@assets/explore/chapter5/backgroundUnit.png'
import Back from '../../../components/Button/back'
import { userContext } from '../../../context/userContext'
import Intro from './Intro'
import Unit1 from './Unit1'
import Unit2 from './Unit2'
import Unit3 from './Unit3'
import Quiz from './Quiz'
import MenuUnitTemplate from '../Template/MenuUnitTemplate'
import Music from '../../../components/Button/Music'

const src = require('../../../assets/sound/bgm5.mp3').default

const main = {
  background: `url(${background})`,
  width: '100%',
  height: '100%',
  border: '1px solid rbga(0,0,0,0)',
  margin: '0px auto',
  position: 'relative',
  overflow: 'hidden',
} as React.CSSProperties

export default function Chapter5() {
  const { path } = useRouteMatch()
  return (
    <div style={main}>
      <Back path="/explore" />
      <userContext.Consumer>
        {({ user, setUser }) => (
          <Router>
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
                      chapter: 5,
                      title: [
                        'วิธีการแก้ปัญหาแบบดั้งเดิม',
                        'วิธีการแก้ปัญหาแบบควอนตัม',
                        'แบบดั้งเดิม ปะทะ แบบควอนตัม!',
                        'เผชิญหน้ากับมังกร 5',
                      ],
                      titleEng: [
                        'Classical Algorithm',
                        'Quantum Algorithm',
                        'Classical vs Quantum!',
                        'Beat the Dragon V',
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
