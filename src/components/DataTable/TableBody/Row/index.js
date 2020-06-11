import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from '@material-ui/core';

import ActionsColumn from '../../ActionsColumn';
import { specificTypeString } from '../../helpers';

const Row = ({ row, columns, actions }) => {
  return (
    <TableRow>
      {columns.map(column => (
        <TableCell key={`key-${column.field}`}>{specificTypeString(column.type, row[column.field])}</TableCell>
      ))}
      <ActionsColumn actions={actions} rowData={row} />
    </TableRow>
  );
};

Row.propTypes = {
  row: PropTypes.shape({}).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Row;
