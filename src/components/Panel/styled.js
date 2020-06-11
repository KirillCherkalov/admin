import { Paper, Container } from '@material-ui/core';
import styled from 'styled-components';

export const Wrap = styled(Container)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CustomPaper = styled(Paper)`
  padding: ${props => `${props.theme.spacing(props.p)}px`};
`;
