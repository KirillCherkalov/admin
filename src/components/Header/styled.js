import styled from 'styled-components';
import { AppBar, Box } from '@material-ui/core';

export const Bar = styled(AppBar)`
  && {
    z-index: ${({ theme }) => theme.zIndex.drawer + 1};
  }
`;

export const Title = styled(Box)`
  && {
    margin-right: 15px;
    flex-grow: 1;
    display: flex;
    align-items: center;

    ${({ theme }) => theme.breakpoints.down('sm')} {
      font-size: 18px;
    }

    ${({ theme }) => theme.breakpoints.down('xs')} {
      font-size: 14px;
    }
  }
`;
