import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Toolbar, IconButton, useTheme, useMediaQuery } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';

import { getIsAuthenticated } from 'redux/auth/selectors';

import Brand from './Brand';
import User from './User';

import * as S from './styled';

const Header = ({ openMenuHandler }) => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <S.Bar position="sticky">
      <Toolbar>
        {isAuthenticated ? (
          <>
            <S.Title>
              {isSmall ? (
                <IconButton color="inherit" onClick={openMenuHandler}>
                  <MenuIcon />
                </IconButton>
              ) : (
                <>
                  <HomeIcon />
                  <Brand variant="h5" />
                </>
              )}
            </S.Title>
            <User />
          </>
        ) : (
          <Brand variant="h5" />
        )}
      </Toolbar>
    </S.Bar>
  );
};

Header.propTypes = {
  openMenuHandler: PropTypes.func.isRequired,
};

export default Header;
