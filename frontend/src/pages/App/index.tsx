import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavigationBar from '../../components/NavigationBar';
import Routes from '../../routing';

import '../../styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
