import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TableHead as Head, TableRow, TableCell, useMediaQuery, useTheme } from '@material-ui/core';

import HeaderColumn from '../HeaderColumn';

const TableHead = ({ columns }) => {
  const [activeSortColumn, setActiveSortColumn] = useState('');
  const theme = useTheme();
  const visible = useMediaQuery(theme.breakpoints.up('md'));
  return visible ? (
    <Head>
      <TableRow>
        {columns.map(column => (
          <TableCell component="th" key={column.title}>
            <HeaderColumn
              isSorting={column.sorting}
              label={column.title}
              sortingAction={column.sortingAction}
              sortBy={column.field}
              activeSort={activeSortColumn}
              setActiveSort={setActiveSortColumn}
            />
          </TableCell>
        ))}
        <TableCell size="small" padding="none" />
      </TableRow>
    </Head>
  ) : null;
};

TableHead.defaultProps = {
  columns: [],
};

TableHead.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
};

export default TableHead;
