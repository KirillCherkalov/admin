import React from 'react';
import PropTypes from 'prop-types';
import { TextField, InputAdornment } from '@material-ui/core';
import { Search as Icon } from '@material-ui/icons';
import { useDebounce } from 'react-use';

const Search = ({ action, value, onChangeValue }) => {
  const onChangeHandler = e => onChangeValue(e.target.value);

  useDebounce(() => action(value), 500, [value]);

  return (
    <TextField
      label="Search"
      variant="outlined"
      size="small"
      value={value}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Icon />
          </InputAdornment>
        ),
      }}
      onChange={onChangeHandler}
    />
  );
};

Search.defaultProps = {
  action: () => {},
  value: '',
  onChangeValue: () => {},
};

Search.propTypes = {
  action: PropTypes.func,
  value: PropTypes.string,
  onChangeValue: PropTypes.func,
};

export default Search;
