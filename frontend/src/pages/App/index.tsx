import React from 'react';
import { Route } from 'react-router-dom';

import NavigationBar from '../../components/NavigationBar';
import Home from '../Home';

import '../../styles/App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="Navigation">
          <NavigationBar />
        </div>
      </header>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/explore" />
        <Route path="/playground" />
        <Route path="/challenge" />
      </div>
    </div>
  );
}

export default App;
