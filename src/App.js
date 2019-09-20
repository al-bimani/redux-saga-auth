import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './components/Landing';
import SignUp from './components/SignUp';

export default () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/join" component={SignUp}/>
    </BrowserRouter>
  )
}