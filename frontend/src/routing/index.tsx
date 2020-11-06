import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';

import Home from '../pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/explore" />
      <Route path="/playground" />
      <Route path="/challenge" />
    </Switch>
  )
}