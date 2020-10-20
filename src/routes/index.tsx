import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exac component={SignUp} />
  </Switch>
);

export default Routes;
