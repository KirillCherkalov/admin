import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { DialogContent, DialogTitle, IconButton, InputAdornment, Typography } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import TextInput from 'components/Forms/TextInput';
import ActionButtons from 'components/Modals/ActionButtons';

import { schemaAdd, schemaEdit } from './validationSchema';

const AddEditForm = ({ closeModal, defaultValues, onSubmit, serverError }) => {
  const withPassword = useMemo(() => Object.keys(defaultValues).length === 0, [defaultValues]);

  const {
    handleSubmit,
    errors,
    control,
    formState: { isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(withPassword ? schemaAdd : schemaEdit),
  });

  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <>
      <DialogTitle>Personal details</DialogTitle>
      <DialogContent>
        <form noValidate>
          <TextInput
            control={control}
            errors={errors}
            isSubmitting={isSubmitting}
            label="Name"
            name="username"
            autoFocus
          />
          {withPassword && (
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
              label="Password"
              name="password"
              type={visiblePassword ? 'text' : 'password'}
            />
          )}
          <TextInput control={control} errors={errors} isSubmitting={isSubmitting} label="Email Address" name="email" />
          {serverError ? (
            <Typography color="error" align="center">
              {serverError}
            </Typography>
          ) : null}
        </form>
      </DialogContent>
      <ActionButtons
        submitName="Save"
        closeName="Cancel"
        onSubmit={handleSubmit(values => onSubmit({ ...defaultValues, ...values }))}
        handleClose={closeModal}
      />
    </>
  );
};

AddEditForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  defaultValues: PropTypes.shape({}),
  onSubmit: PropTypes.func.isRequired,
  serverError: PropTypes.string,
};

AddEditForm.defaultProps = {
  defaultValues: {},
  serverError: '',
};

export default AddEditForm;
