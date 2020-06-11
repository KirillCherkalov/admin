import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, Slide, useMediaQuery, useTheme } from '@material-ui/core';

const Base = ({ children, handleClose, open, ...rest }) => {
  const theme = useTheme();
  const isFullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

  return (
    <Dialog
      fullScreen={isFullScreen}
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      PaperProps={{
        style: {
          minWidth: isFullScreen ? 'auto' : '550px',
          justifyContent: 'center',
        },
      }}
      {...rest}
    >
      {children}
    </Dialog>
  );
};

Base.propTypes = {
  children: PropTypes.node.isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Base;
