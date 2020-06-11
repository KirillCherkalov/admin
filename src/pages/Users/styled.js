import styled from 'styled-components';
import { Box, Container, Button } from '@material-ui/core';

export const Wrap = styled(Container)`
  ${props => props.theme.breakpoints.up('md')} {
    width: ${props => `calc(100% - ${props.theme.props.sideMenuWidth}px)`};
  }
`;

export const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  ${props => props.theme.breakpoints.down('sm')} {
    padding: 15px 0;
    flex-wrap: wrap;
  }
`;

export const FilterBox = styled(Box)`
  display: flex;
  align-items: center;
  ${props => props.theme.breakpoints.down('sm')} {
    width: 100%;
    order: 2;
    padding-top: 15px;
  }
`;

export const FilterBtn = styled(Button)`
  && {
    margin-right: 20px;
  }
`;
