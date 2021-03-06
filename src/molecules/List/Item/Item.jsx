import React, { Children, forwardRef } from 'react';
import PropTypes from 'prop-types';

import Paper from '../../../atoms/Paper';
import withStyle from '../../../Theme/withStyle';

import Body from './Body';

const ListItem = forwardRef(
  ({ BaseElement, center, children, css, element, href, reverse, small, ...props }, ref) => {
    // eslint-disable-next-line react/prop-types
    const { autoHeight, blockLevel, textLeft, ...bodyProps } = props;
    return (
      <BaseElement css={css} hard href={href} element={element} atomRef={ref} {...props}>
        {Children.count(children) === 1 ? (
          <Body center={center} reverse={reverse} small={small} {...bodyProps}>
            {children}
          </Body>
        ) : (
          children
        )}
      </BaseElement>
    );
  },
);

ListItem.displayName = 'ListItem';
ListItem.propTypes = {
  BaseElement: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.shape({ render: PropTypes.func.isRequired }),
  ]),
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
  css: PropTypes.shape().isRequired,
  href: PropTypes.string,
  element: PropTypes.string,
  reverse: PropTypes.bool,
  small: PropTypes.bool,
};
ListItem.defaultProps = {
  BaseElement: Paper,
  center: false,
  element: undefined,
  href: null,
  reverse: false,
  small: false,
};

export default withStyle(ListItem);
