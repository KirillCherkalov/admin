import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getIsAuthenticated } from 'redux/auth/selectors';

import Panel from 'components/Panel';

const NotFound = () => {
  const { t } = useTranslation('not-found');
  const isAuthenticated = useSelector(getIsAuthenticated);
  const homeLink = isAuthenticated ? '/users' : '/auth/login';

  return (
    <Panel maxWidth="md">
      <Typography variant="h2" color="error">
        {t('title')}
      </Typography>
      <Button component={Link} to={homeLink} color="primary">
        {t('homeButtonLabel')}
      </Button>
    </Panel>
  );
};

export default NotFound;
