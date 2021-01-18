import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../pages/Home';
import Explore from '../pages/Explore';
import Playground from '../pages/Playground';
import Challenge from '../pages/Challenge'

export default function Routes() {
  return (
    <>
      <Route path="/" exact component={ Home } />
      <Route path="/explore" exact component={ Explore }/>
      <Route path="/playground" exact component={ Playground }/>
      <Route path="/challenge" exact component={ Challenge }/>
    </>
  )
}