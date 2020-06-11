import React, { Suspense, lazy, useState, useCallback } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsAuthenticated } from 'redux/auth/selectors';

import Header from 'components/Header';
import SideMenu from 'components/SideMenu';
import Loading from 'components/Loading';

import PrivateRoute from './PrivateRoute';
import * as S from './styled';

const Auth = lazy(() => import('pages/Auth'));
const Users = lazy(() => import('pages/Users'));
const NotFound = lazy(() => import('pages/NotFound'));

const AppRouter = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenuHandler = useCallback(() => setIsOpenMenu(!isOpenMenu), [isOpenMenu]);

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Header openMenuHandler={toggleMenuHandler} />
        <S.RoutesContainer>
          {isAuthenticated && <SideMenu isOpen={isOpenMenu} toggleMenuHandler={toggleMenuHandler} />}
          <Switch>
            <Route path="/auth" component={Auth} />
            <PrivateRoute path="/users" redirectTo="/auth/login" component={Users} />
            <Redirect exact from="/" to="/users" />
            <Route component={NotFound} />
          </Switch>
        </S.RoutesContainer>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
