import React from 'react';
import PropTypes from 'prop-types';

import Font from '../Font';
import withStyle from '../../Theme/withStyle';
import shadows from './shadows';

const modifyProps = ({ css, rize, size, theme, ...props }) => {
  const nextCss = {};
  if (rize && rize < shadows.length - 1) {
    Object.assign(nextCss, {
      boxShadow: shadows[rize],
    });
  }
  if (size) {
    const cssSize = `${size}px`;
    Object.assign(nextCss, { width: cssSize, height: cssSize });
  }
  return { element: 'div', ...props, css: { ...nextCss, ...css } };
};

const Paper = props => <Font {...modifyProps(props)} />;

Paper.displayName = 'Paper';
Paper.propTypes = {
  rize: PropTypes.number,
  size: PropTypes.number,
};
Paper.defaultProps = {
  rize: 0,
  size: 0,
};

export default withStyle(Paper);
