import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { Button, Typography, useMediaQuery } from '@material-ui/core';

import * as LS from 'services/localStorage';
import { actions } from 'redux/auth';

const User = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const theme = useTheme();
  const showWelcome = useMediaQuery(theme.breakpoints.up('sm'));

  const signOut = () => {
    dispatch(actions.signOut());
    const { from } = location.state || { from: { pathname: '/auth/login' } };

    LS.clear();
    history.replace(from);
  };

  return (
    <>
      {showWelcome && <Typography>Welcome, Administrator</Typography>}
      <Button color="inherit" onClick={signOut}>
        sign out
      </Button>
    </>
  );
};

export default User;
