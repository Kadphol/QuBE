import React from 'react';
import { BrowserRouter as Router,Route, Switch, useRouteMatch } from 'react-router-dom';

import Music from '../../components/sound/Music'
import Progressbar from '../../components/Progressbar';
import DialogBox from '../../components/DialogBox';
import Map from './Map';
import MenuMap from './MenuMap'
import './Explore.css';
import { userContext } from '../../context/userContext';



function Explore() {
  
  const { path } = useRouteMatch();
  return (
    <div className="explore">
      <userContext.Consumer>
        {
          (user) => <Progressbar {...user}/>
        }
      </userContext.Consumer>
      <Map>
        <Router>
          <Switch>
            <Route exact path = {path} component = { MenuMap }/>
            <Route path = {`${path}/chapter-1`} />
            <Route path = {`${path}/chapter-2`} />
            <Route path = {`${path}/chapter-3`} />
            <Route path = {`${path}/chapter-4`} />
            <Route path = {`${path}/chapter-5`} />
          </Switch>
        </Router>
        <DialogBox />
      </Map>
      
      <Music url="https://www.mboxdrive.com/bgm.mp3"/>
    </div>
  );
}

export default Explore;