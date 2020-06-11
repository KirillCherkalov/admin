import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Login from './Login';
import ResetPassword from './ResetPassword';
import RestorePassword from './RestorePassword';

export const routes = {
  login: '/auth/login',
  reset: '/auth/password/reset',
  restore: '/auth/password/restore',
};

const Auth = () => (
  <Switch>
    <Route exact path={routes.login} component={Login} />
    <Route exact path={routes.reset} component={ResetPassword} />
    <Route exact path={routes.restore} component={RestorePassword} />
    <Redirect to={routes.login} />
  </Switch>
);

export default Auth;
