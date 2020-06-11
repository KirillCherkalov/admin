import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { FormHelperText, Input, InputLabel } from '@material-ui/core';

import * as S from './styled';

const TextInput = ({ control, errors, isSubmitting, label, name, ...rest }) => (
  <S.Container required fullWidth margin="normal" disabled={isSubmitting} error={!!errors[name]}>
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <Controller id={name} as={Input} name={name} autoComplete={name} control={control} defaultValue="" {...rest} />
    {errors && <FormHelperText>{errors[name]?.message}</FormHelperText>}
  </S.Container>
);

TextInput.propTypes = {
  control: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextInput;
