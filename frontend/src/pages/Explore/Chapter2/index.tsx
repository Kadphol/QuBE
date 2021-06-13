import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';
import background from '../../../assets/explore/chapter2/BackgroundUnit.png'
import Back from '../../../components/Button/back'
import { userContext } from '../../../context/userContext';
import Intro from './Intro'
import Unit1 from './Unit1'
import Unit2 from './Unit2'
import Unit3 from './Unit3'
import Quiz from './Quiz'
import MenuUnitTemplate from '../Template/MenuUnitTemplate'
import Music from '@components/Button/Music'

const src = require('@assets/sound/bgm2.mp3').default

const main = {
    background: `url(${background})`,
    width: '100%',
    height: '100%',
    border: '1px solid rbga(0,0,0,0)',
    margin: '0px auto',
    position: 'relative',
    overflowX: 'hidden',
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
                                        "บิต ปะทะ คิวบิต",
                                        "การทับซ้อนของคิวบิต",
                                        "คิวบิตพัวพัน",
                                        "เผชิญหน้ากับมังกร 2"
                                    ],
                                    titleEng: [
                                        "Bit VS Qubit",
                                        "Superposition",
                                        "Entanglement",
                                        "Beat the Dragon II"
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

    );
}
