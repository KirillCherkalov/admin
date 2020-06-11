import React from 'react';
import PropTypes from 'prop-types';
import { TableBody as Body, useTheme, useMediaQuery } from '@material-ui/core';

import Row from './Row';
import MobileRow from './MobileRow';

const TableBody = ({ data, columns, actions }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Body>
      {data.map(row =>
        isLargeScreen ? (
          <Row key={row.id} row={row} columns={columns} actions={actions} />
        ) : (
          <MobileRow key={row.id} row={row} columns={columns} actions={actions} />
        ),
      )}
    </Body>
  );
};

TableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableBody;
