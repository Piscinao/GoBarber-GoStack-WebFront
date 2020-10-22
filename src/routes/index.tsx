import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />

    {/* // isPrivate e o usuario n estiver logado manda direto pra pagina de login */}
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
