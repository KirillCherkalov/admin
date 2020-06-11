import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputAdornment, IconButton, Button, Box, Typography } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import TextInput from 'components/Forms/TextInput';
import validationSchema from './validationSchema';

const Form = ({ onSubmit, serverError }) => {
  const [visiblePass, setVisiblePass] = useState(false);
  const [visibleConfirmPass, setVisibleConfirmPass] = useState(false);

  const {
    handleSubmit,
    errors,
    control,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextInput
        control={control}
        errors={errors}
        isSubmitting={isSubmitting}
        label="Password"
        name="password"
        type={visiblePass ? 'text' : 'password'}
        endAdornment={
          <InputAdornment>
            <IconButton onClick={() => setVisiblePass(!visiblePass)}>
              {visiblePass ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <TextInput
        name="confirmPassword"
        label="Confirm Password"
        type={visibleConfirmPass ? 'text' : 'password'}
        control={control}
        errors={errors}
        isSubmitting={isSubmitting}
        endAdornment={
          <InputAdornment>
            <IconButton onClick={() => setVisibleConfirmPass(!visibleConfirmPass)}>
              {visibleConfirmPass ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      {serverError ? (
        <Typography color="error" align="center">
          {serverError}
        </Typography>
      ) : null}
      <Box my={2} align="center">
        <Typography color="textSecondary" variant="caption">
          Fields marked with * are required
        </Typography>
      </Box>
      <Button disabled={isSubmitting} type="submit" variant="contained" color="primary" fullWidth>
        Reset Password
      </Button>
    </form>
  );
};

Form.propTypes = {
  serverError: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

Form.defaultProps = {
  serverError: '',
};

export default Form;
