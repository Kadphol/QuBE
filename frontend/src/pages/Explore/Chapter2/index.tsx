import React, { useState } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';
import background from '../../../assets/explore/chapter2/BackgroundUnit.png'
import Back from '../../../components/Button/back'
import { userContext } from '../../../context/userContext';
import Intro from './Intro'
import Unit1 from './Unit1'
import Quiz from './Quiz'
import MenuUnitTemplate from '../MenuUnitTemplate'
import Music from '../../../components/Button/Music'

const src = require('../../../assets/sound/bgm2.mp3').default

const main = {
    background: `url(${background})`,
    width: '100%',
    height: '100%',
    border: '1px solid black',
    margin: '0px auto',
    position: 'relative',
} as React.CSSProperties

export default function Chapter2() {

    const { path } = useRouteMatch();
    return (
        <div style={main}>
            <Back path="/explore" />
            <userContext.Consumer>
                {({user,setUser}) =>
                    <BrowserRouter>
                        <Router>
                            <Switch>
                            <Route path={`${path}/intro`} render={() => <Intro/>} />
                                <Route exact path={path} render={() => 
                                <MenuUnitTemplate 
                                user={user} 
                                detail={{
                                    chapter: 2,
                                    title: [
                                        "หน่วยที่ 1: บิต ปะทะ คิวบิต",
                                        "หน่วยที่ 2: การทับซ้อนของคิวบิต",
                                        "หน่วยที่ 3: คิวบิตพัวพัน",
                                        "บททดสอบ: เผชิญหน้ากับมังกร II"
                                    ]
                                }}
                                 />
                                } />
                                <Route path={`${path}/unit-1`} render={() => <Unit1 setUser={setUser} user={user} />} />
                                <Route path={`${path}/unit-2`} render={() => <Unit1 setUser={setUser} user={user} />} />
                                <Route path={`${path}/unit-3`} render={() => <Unit1 setUser={setUser} user={user} />} />
                                <Route path={`${path}/quiz`} render={() => <Quiz setUser={setUser} user={user} />} />
                            </Switch>
                        </Router>
                        <Music url={src}/>
                    </BrowserRouter>
                }
            </userContext.Consumer>
        </div>

    );
}
