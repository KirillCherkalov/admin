import React from 'react';
import PropTypes from 'prop-types';

import { CustomPaper, Wrap } from './styled';

const Panel = ({ children, maxWidth, variant, elevation, padding }) => {
  return (
    <Wrap maxWidth={maxWidth}>
      <CustomPaper variant={variant} elevation={elevation} p={padding}>
        {children}
      </CustomPaper>
    </Wrap>
  );
};

Panel.defaultProps = {
  children: '',
  maxWidth: 'sm',
  variant: 'elevation',
  elevation: 5,
  padding: 3,
};

Panel.propTypes = {
  children: PropTypes.node,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.oneOf(['elevation', 'outlined']),
  elevation: PropTypes.number,
  padding: PropTypes.number,
};

export default Panel;
