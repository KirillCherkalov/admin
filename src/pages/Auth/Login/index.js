import React from 'react';
import { useAsyncFn } from 'react-use';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { login } from 'http/auth';
import { actions } from 'redux/auth';
import * as LS from 'services/localStorage';

import Panel from 'components/Panel';

import Form from './Form';

const Login = () => {
  const { t } = useTranslation('login');
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [state, authenticate] = useAsyncFn(async values => {
    const data = await login(values);
    const { from } = location.state || { from: { pathname: '/' } };

    dispatch(actions.authenticate(data));
    LS.authenticate(data);
    history.replace(from);
  }, []);

  return (
    <Panel>
      <Typography variant="h4" display="block" align="center">
        {t('title')}
      </Typography>
      <Form onSubmit={authenticate} serverError={state.error && state.error.response.data.exception.message} />
    </Panel>
  );
};

export default Login;
