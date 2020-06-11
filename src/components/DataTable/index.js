import React from 'react';
import { Paper, Table, TablePagination } from '@material-ui/core';
import PropTypes from 'prop-types';

import TableHead from './TableHead';
import TableBody from './TableBody';
import EmptyTable from './EmptyTable';

const DataTable = ({ data, columns, actions, paginationOptions }) => {
  return (
    <Paper>
      {columns.length ? (
        <Table stickyHeader>
          <TableHead columns={columns} />
          <TableBody data={data} columns={columns} actions={actions} />
        </Table>
      ) : (
        <EmptyTable />
      )}
      <TablePagination {...paginationOptions} />
    </Paper>
  );
};

DataTable.defaultProps = {
  data: [],
  columns: [],
  actions: [],
  totalRowsCount: 0,
  paginationOptions: {
    count: 0,
    page: 0,
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 15, 20],
    onChangePage: () => {},
    component: 'div',
  },
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.arrayOf(PropTypes.object),
  paginationOptions: PropTypes.objectOf(PropTypes.any),
  totalRowsCount: PropTypes.number,
};

export default DataTable;
