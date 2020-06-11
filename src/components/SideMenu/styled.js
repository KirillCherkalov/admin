import styled from 'styled-components';
import { SwipeableDrawer, Toolbar } from '@material-ui/core';

export const DrawerContainer = styled(SwipeableDrawer)`
  && {
    ${props => props.theme.breakpoints.up('md')} {
      width: ${props => `${props.theme.props.sideMenuWidth}px`};
    }
  }
`;

export const Bar = styled(Toolbar)`
  && {
    ${props => props.theme.breakpoints.down('sm')} {
      background-color: ${props => props.theme.palette.primary.main};
      color: #ffffff;
    }
  }
`;
