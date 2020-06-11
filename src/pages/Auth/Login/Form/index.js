import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { Box, Button, InputAdornment, IconButton, Link, Typography } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';

import TextInput from 'components/Forms/TextInput';

import validationSchema from './validationSchema';

const LoginForm = ({ onSubmit, serverError }) => {
  const { t } = useTranslation('login');
  const {
    handleSubmit,
    errors,
    control,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextInput
        control={control}
        errors={errors}
        isSubmitting={isSubmitting}
        label={t('form.labels.email')}
        name="email"
      />
      <TextInput
        control={control}
        endAdornment={
          <InputAdornment>
            <IconButton onClick={() => setVisiblePassword(!visiblePassword)}>
              {visiblePassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        errors={errors}
        isSubmitting={isSubmitting}
        label={t('form.labels.password')}
        name="password"
        type={visiblePassword ? 'text' : 'password'}
      />
      {serverError ? (
        <Typography color="error" align="center">
          {serverError}
        </Typography>
      ) : null}
      <Box my={2} textAlign="center">
        <Link underline="always" component={RouterLink} to="/auth/password/restore">
          <Typography style={{ fontSize: 12 }}>{t('form.forgotPasswordLink')}</Typography>
        </Link>
      </Box>
      <Box my={2}>
        <Typography color="textSecondary" align="center" style={{ fontSize: 12 }}>
          {t('form.requiredFieldsInfo')}
        </Typography>
      </Box>
      <Button disabled={isSubmitting} type="submit" variant="contained" color="primary" fullWidth>
        {t('form.signInButton')}
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  serverError: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  serverError: '',
};

export default LoginForm;
