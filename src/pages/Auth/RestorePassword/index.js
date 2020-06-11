import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Panel from 'components/Panel';
import { Button } from '@material-ui/core';
import { useAsyncFn } from 'react-use';

import { restorePassword } from 'http/auth';

import * as S from './styled';
import Form from './Form';

const RestorePassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [state, restorePass] = useAsyncFn(async formData => {
    const { status } = await restorePassword(formData);
    if (status === 201) setIsSubmitted(true);
  }, []);

  return (
    <Panel>
      <S.Title variant="h4" align="center">
        Restore Password
      </S.Title>
      <S.Subtitle align="center" color="textSecondary">
        {isSubmitted
          ? 'Password reset link was sent to your email address.'
          : 'Enter your email and we will send password reset link to you'}
      </S.Subtitle>
      {isSubmitted ? (
        <Button variant="contained" color="primary" component={Link} to="/auth/login" fullWidth>
          Close
        </Button>
      ) : (
        <Form onSubmit={restorePass} serverError={state.error && state.error.response.data.exception.message} />
      )}
    </Panel>
  );
};

export default RestorePassword;
