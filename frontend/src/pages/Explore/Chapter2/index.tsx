import React, { useState } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';
import background from '../../../assets/explore/chapter2/BackgroundUnit.png'
import Back from '../../../components/Button/back'
import { userContext } from '../../../context/userContext';
import Unit1 from './Unit1'
// import Unit2 from './Unit2'
// import Unit3 from './Unit3'
import Quiz from './Quiz'
import MenuUnitTemplate from '../MenuUnitTemplate'

// import F2 from './Unit1/F2'
// import F3 from './Unit1/F3'
// import F4 from './F4'
// import F5 from './F5'
// import F6 from './F6'
// import F7 from './F7'

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
                    </BrowserRouter>
                }
            </userContext.Consumer>
        </div>

    );
}
