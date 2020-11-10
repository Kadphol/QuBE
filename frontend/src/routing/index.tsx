import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../pages/Home';

export default function Routes() {
  return (
    <>
      <Route path="/" exact component={ Home } />
      <Route path="/explore" />
      <Route path="/playground" />
      <Route path="/challenge" />
    </>
  )
}