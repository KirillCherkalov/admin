import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, IconButton } from '@material-ui/core';
import { Settings, Delete } from '@material-ui/icons';

const ActionsColumn = ({ actions, rowData }) => {
  let editAction = null;
  let deleteAction = null;
  if (actions.some(elem => elem.type === 'edit')) {
    editAction = actions.find(action => action.type === 'edit');
  }
  if (actions.some(elem => elem.type === 'delete')) {
    deleteAction = actions.find(action => action.type === 'delete');
  }
  return actions.length ? (
    <TableCell size="small" padding="none" align="center">
      {editAction && (
        <IconButton onClick={e => editAction.action(e, rowData)} size="small">
          <Settings color="action" />
        </IconButton>
      )}
      {deleteAction && (
        <IconButton onClick={e => deleteAction.action(e, rowData)} size="small">
          <Delete color="action" />
        </IconButton>
      )}
    </TableCell>
  ) : null;
};

ActionsColumn.defaultProps = {
  actions: [],
  rowData: {},
};

ActionsColumn.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object),
  rowData: PropTypes.objectOf(PropTypes.any),
};

export default ActionsColumn;
