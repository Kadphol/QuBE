import React, { useState } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';
import background from '@assets/explore/chapter4/backgroundUnit.png'
import Back from '../../../components/Button/back'
import { userContext } from '../../../context/userContext';
import Intro from './Intro'
import Unit1 from './Unit1'
import Unit2 from './Unit2'
import Unit3 from './Unit3'
import Quiz from './Quiz'
import MenuUnitTemplate from '../Template/MenuUnitTemplate'
import Music from '../../../components/Button/Music'

const src = require('../../../assets/sound/bgm4.mp3').default

const main = {
    background: `url(${background})`,
    width: '100%',
    height: '100%',
    border: '1px solid rbga(0,0,0,0)',
    margin: '0px auto',
    position: 'relative',
    overflowX: 'hidden'
} as React.CSSProperties

export default function Chapter4() {

    const { path } = useRouteMatch();
    return (
        <div style={{height:'100%',backgroundColor:'white'}}>
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
                                    chapter: 4,
                                    title: [
                                        "โลจิกเกต ปะทะ ควอนตัมเกต",
                                        "ควอนตัมเกต ตอน คิวบิตที่โดดเดี่ยว",
                                        "ควอนตัมเกต ตอน แก๊งของคิวบิต",
                                        "เผชิญหน้ากับมังกร 4"
                                    ],
                                    titleEng: [
                                        "Logic gate vs Quantum gate",
                                        "Single qubit Quantum gate",
                                        "Multiple qubit Quantum gate",
                                        "Beat the Dragon IV"
                                    ]
                                }}
                                 />
                                } />
                                <Route path={`${path}/unit-1`} render={() => <Unit1 setUser={setUser} user={user} />} />
                                <Route path={`${path}/unit-2`} render={() => <Unit2 setUser={setUser} user={user} />} />
                                <Route path={`${path}/unit-3`} render={() => <Unit3 setUser={setUser} user={user} />} />
                                <Route path={`${path}/quiz`} render={() => <Quiz setUser={setUser} user={user} />} />
                            </Switch>
                        </Router>
                        <Music url={src}/>
                    </BrowserRouter>
                }
            </userContext.Consumer>
        </div>
        </div>
    );
}
