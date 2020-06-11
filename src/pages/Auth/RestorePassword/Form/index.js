import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { Button, Typography } from '@material-ui/core';

import TextInput from 'components/Forms/TextInput';

import validationSchema from './validationSchema';

const RestorePasswordForm = ({ onSubmit, serverError }) => {
  const {
    handleSubmit,
    control,
    errors,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextInput control={control} errors={errors} isSubmitting={isSubmitting} label="Email Address" name="email" />
      {serverError && (
        <Typography color="error" align="center" gutterBottom>
          {serverError}
        </Typography>
      )}
      <Button type="submit" disabled={isSubmitting} variant="contained" fullWidth color="primary">
        Restore
      </Button>
    </form>
  );
};

RestorePasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  serverError: PropTypes.string,
};

RestorePasswordForm.defaultProps = {
  serverError: '',
};

export default RestorePasswordForm;
