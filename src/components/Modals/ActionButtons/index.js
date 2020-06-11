import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button, DialogActions } from '@material-ui/core';

const ActionButtons = ({ closeName, handleClose, onSubmit, submitName, withoutClose, withoutForm }) => {
  const handleSubmit = useCallback(async () => {
    await onSubmit();

    if (withoutForm) {
      handleClose();
    }
  }, [handleClose, onSubmit, withoutForm]);

  return (
    <DialogActions>
      <Button type="submit" color="primary" onClick={handleSubmit}>
        {submitName}
      </Button>
      {!withoutClose && (
        <Button color="primary" onClick={handleClose}>
          {closeName}
        </Button>
      )}
    </DialogActions>
  );
};

ActionButtons.propTypes = {
  closeName: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitName: PropTypes.string,
  withoutClose: PropTypes.bool,
  withoutForm: PropTypes.bool,
};

ActionButtons.defaultProps = {
  closeName: 'No',
  submitName: 'Yes',
  withoutClose: PropTypes.false,
  withoutForm: false,
};

export default ActionButtons;
