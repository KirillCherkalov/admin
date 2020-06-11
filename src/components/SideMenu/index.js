import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, useTheme, useMediaQuery } from '@material-ui/core';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

import Brand from 'components/Header/Brand';

import * as S from './styled';

const list = ['Users'];
const links = ['/users'];

const SideMenu = ({ isOpen, toggleMenuHandler }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <S.DrawerContainer
      variant={isSmall ? 'temporary' : 'permanent'}
      open={isOpen}
      onOpen={toggleMenuHandler}
      onClose={toggleMenuHandler}
    >
      <S.Bar>{isSmall ? <Brand /> : null}</S.Bar>
      <List>
        {list.map((text, index) => (
          <ListItem button key={text} component={Link} to={links[index]} onClick={toggleMenuHandler}>
            <ListItemIcon>
              <SupervisedUserCircleIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </S.DrawerContainer>
  );
};

SideMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenuHandler: PropTypes.func.isRequired,
};

export default SideMenu;
