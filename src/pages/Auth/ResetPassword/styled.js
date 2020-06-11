import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Title = styled(Typography)`
  && {
    margin-bottom: 20px;
    color: ${props => props.issuccess};
  }
`;
