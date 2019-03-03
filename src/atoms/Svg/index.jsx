import React from 'react';
import PropTypes from 'prop-types';

import Atom from '../Atom';
import withStyle from '../../Theme/withStyle';

const Svg = ({ children, color, css, getColor, size, ...rest }) => (
  <Atom
    {...rest}
    element="svg"
    css={{
      fill: color ? getColor(color) : 'currentColor',
      height: `${size}px`,
      width: `${size}px`,
      ...css,
    }}
    viewBox="0 0 20 20"
  >
    {children}
  </Atom>
);

Svg.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.node,
  css: PropTypes.shape().isRequired,
  getColor: PropTypes.func.isRequired,
  size: PropTypes.number,
};
Svg.defaultProps = {
  color: null,
  size: 24,
};
Svg.displayName = 'Svg';

export default withStyle(Svg);
