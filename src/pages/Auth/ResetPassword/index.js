import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme, Button } from '@material-ui/core';
import { useAsyncFn } from 'react-use';
import { Link } from 'react-router-dom';

import { resetPass } from 'http/auth';

import Panel from 'components/Panel';

import * as S from './styled';
import Form from './Form';

const ResetPassword = ({ location: { search } }) => {
  const theme = useTheme();
  const green = theme.palette.success.dark;
  const params = new URLSearchParams(search);
  const token = params.get('token');
  const [success, setSuccess] = useState(false);
  const [state, resetPassword] = useAsyncFn(async values => {
    const data = await resetPass({ ...values, token });
    if (data.status === 201) {
      setSuccess(true);
    }
  }, []);

  return (
    <Panel>
      <S.Title align="center" variant={success ? 'h6' : 'h4'} issuccess={success ? green : 'inherit'}>
        {success ? 'Your password has been successfully updated' : 'Reset Your Password'}
      </S.Title>
      {success ? (
        <Button component={Link} to="/auth/login" variant="contained" color="primary" fullWidth>
          Close
        </Button>
      ) : (
        <Form onSubmit={resetPassword} serverError={state.error && state.error.response.data.exception.message} />
      )}
    </Panel>
  );
};

ResetPassword.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResetPassword;
