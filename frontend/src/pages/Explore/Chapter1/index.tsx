import React, { useState } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';
import background from '../../../assets/explore/chapter1/BackgroundUnit.png'
import Back from '../../../components/Button/back'
import { userContext } from '../../../context/userContext';
import Intro from './Intro'
import Unit1 from './Unit1'
import Unit2 from './Unit2'
import Unit3 from './Unit3'
import Quiz from './Quiz'
import Music from '../../../components/Button/Music'
import MenuUnitTemplate from '../MenuUnitTemplate'

const src = require('../../../assets/sound/bgm1.mp3').default

const main = {
    background: `url(${background})`,
    width: '100%',
    height: '100%',
    border: '1px solid black',
    margin: '0px',
    position: 'relative',
} as React.CSSProperties

export default function Chapter1() {

    const { path } = useRouteMatch();
    const [introFinish] = useState(false)

    return (
        <div style={main}>
            <Back path="/explore" />
            <userContext.Consumer>
                {({ user, setUser }) =>
                    <BrowserRouter>
                        <Router>
                            <Switch>
                                <Route path={`${path}/intro`} render={() => <Intro />} />
                                <Route exact path={path} render={() =>
                                    <MenuUnitTemplate
                                        user={user}
                                        detail={{
                                            chapter: 1,
                                            title: [
                                                "หน่วยที่ 1: สวัสดี! คอมพิวเตอร์",
                                                "หน่วยที่ 2: รู้จักกับบิต",
                                                "หน่วยที่ 3: คอมพิวเตอร์ทำงาน!",
                                                "บททดสอบ: เผชิญหน้ากับมังกร I"
                                            ]
                                        }} />
                                } />
                                <Route path={`${path}/unit-1`} render={() => <Unit1 setUser={setUser} user={user} />} />
                                <Route path={`${path}/unit-2`} render={() => <Unit2 setUser={setUser} user={user} />} />
                                <Route path={`${path}/unit-3`} render={() => <Unit3 setUser={setUser} user={user} />} />
                                <Route path={`${path}/quiz`} render={() => <Quiz setUser={setUser} user={user} />} />
                            </Switch>
                        </Router>
                        <Music url={src} />
                    </BrowserRouter>

                }
            </userContext.Consumer>
        </div>

    );
}
