import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsAuthenticated } from 'redux/auth/selectors';

const PrivateRoute = ({ component: Component, redirectTo, ...rest }) => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthenticated) {
          return <Component {...props} />;
        }

        return (
          <Redirect
            to={{
              pathname: redirectTo,
              state: { from: rest.location },
            }}
          />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string,
};

PrivateRoute.defaultProps = {
  redirectTo: '/auth/login',
};

export default PrivateRoute;
