import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { Wrap } from './styled';

const Loading = () => (
  <Wrap>
    <CircularProgress size={40} thickness={4} disableShrink />
  </Wrap>
);

export default Loading;
