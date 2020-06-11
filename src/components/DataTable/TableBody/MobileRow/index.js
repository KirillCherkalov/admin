import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableRow, TableCell, Collapse, IconButton } from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';

import ActionsColumn from '../../ActionsColumn';
import { specificTypeString } from '../../helpers';

const MobileRow = ({ row, columns, actions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const collapsible = columns.filter(col => col.collapsible);
  const notCollapsible = columns.filter(col => !col.collapsible);

  const onChangeVisible = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      <TableRow>
        <TableCell size="small" padding="none">
          <IconButton onClick={onChangeVisible}>{isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</IconButton>
        </TableCell>
        {notCollapsible.map(column => (
          <TableCell key={`col-${column.field}`}>{row[column.field]}</TableCell>
        ))}
        <ActionsColumn rowData={row} actions={actions} />
      </TableRow>
      <TableRow>
        <TableCell colSpan={notCollapsible.length + 2} scope="row" padding="none">
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Table size="small">
              <TableBody>
                {collapsible.map(column => (
                  <TableRow key={column.title}>
                    <TableCell align="left">{column.title}</TableCell>
                    <TableCell align="right">{specificTypeString(column.type, row[column.field])}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

MobileRow.propTypes = {
  row: PropTypes.shape({}).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MobileRow;
