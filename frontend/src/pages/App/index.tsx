import React from 'react';
import { Route } from 'react-router-dom'

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Home from '../Home';
import Explore from '../Explore';

import '../../styles/App.css';

function App() {
  
  return (
    <div className="App">
      <div className="Navigation">
        <NavigationBar />
      </div>
      <div>
        <Route exact path= "/" component={Home} />
        <Route path="/explore" component={Explore}/>
        <Route path="/playground" />
        <Route path="/challenge" />
      </div> 
    </div>
  );
}

export default App;
