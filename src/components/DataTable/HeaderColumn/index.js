import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography, TableSortLabel } from '@material-ui/core';

const ColumnHeader = ({ isSorting, label, sortingAction, sortBy, activeSort, setActiveSort }) => {
  const [direction, setDirection] = useState('asc');
  const [sortActive, setSortActive] = useState(false);

  useEffect(() => {
    if (activeSort !== label) setSortActive(false);
  }, [activeSort, label]);

  const handleClick = () => {
    setActiveSort(label);
    if (sortActive === false) {
      setDirection('asc');
      setSortActive(true);
      sortingAction(direction, sortBy);
    } else if (direction === 'asc') {
      setDirection('desc');
      sortingAction('desc', sortBy);
    } else {
      setDirection('asc');
      setSortActive(false);
      sortingAction();
    }
  };

  return isSorting ? (
    <TableSortLabel direction={direction} active={sortActive} onClick={handleClick}>
      <Typography>{label}</Typography>
    </TableSortLabel>
  ) : (
    <Typography>{label}</Typography>
  );
};

ColumnHeader.defaultProps = {
  isSorting: false,
  label: '',
  sortingAction: () => {},
  sortBy: '',
  activeSort: '',
  setActiveSort: () => {},
};

ColumnHeader.propTypes = {
  isSorting: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  sortingAction: PropTypes.func,
  sortBy: PropTypes.string,
  activeSort: PropTypes.string,
  setActiveSort: PropTypes.func,
};

export default ColumnHeader;
