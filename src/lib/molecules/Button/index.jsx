import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';


import Atom from '../../atoms/Atom';
import Paper from '../../atoms/Paper';

import Ripple from '../../fx/Ripple';
import Spinner from '../Spinner';

import withStyle from '../../Theme/withStyle';

const textStyle = {
  pointerEvents: 'none',
  position: 'relative',
  zIndex: 1,
};

class Button extends Component {
  state = {
    hasHighlight: false,
  }
  contentRef = createRef();
  rippleRef = createRef();

  get style() {
    const { color, style, getColor, round } = this.props;
    let result = {
      ...style,
      borderColor: getColor(color),
    };
    if (round) {
      const { width, height, ...rest } = result;
      result = { ...rest, padding: 0 };
    }
    return result;
  }

  handleBlur = () => this.rippleRef.current.removeFocus();
  handleFocus = event => this.rippleRef.current.setFocus(event, this.contentRef);

  handleMouseEnter = () => this.setState({ hasHighlight: true });
  handleMouseLeave = () => this.setState({ hasHighlight: false });

  handleDown = (event) => {
    this.rippleRef.current.pushEvent(event);
    this.props.onPointerDown(event);
  }
  handleUp = (event) => {
    this.rippleRef.current.release(event);
    this.props.onPointerUp(event);
  }

  render() {
    const {
      busy, children, element, noRipple, spinnerProps, style, ...rest
    } = this.props;

    const { hasFocus, hasHighlight } = this.state;
    return (
      <Paper
        button
        element={element}
        tabIndex={0}
        {...rest}
        style={this.style}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onPointerDown={this.handleDown}
        onPointerUp={this.handleUp}
      >
        {!noRipple && (
          <Ripple
            {...rest}
            highlight={hasHighlight}
            focus={hasFocus}
            ref={this.rippleRef}
          />
        )}
        <Atom
          element="span"
          style={busy ? { ...textStyle, visibility: 'hidden' } : textStyle}
          uiRef={this.contentRef}
        >
          {children}
        </Atom>
        {busy && <Spinner blockLevel {...spinnerProps} {...rest} />}
      </Paper>
    );
  }
}

Button.displayName = 'Button';
Button.propTypes = {
  busy: PropTypes.bool,
  children: PropTypes.node,
  element: PropTypes.node,
  noRipple: PropTypes.bool,
  onPointerDown: PropTypes.func,
  onPointerUp: PropTypes.func,
  spinnerProps: PropTypes.shape(),
  style: PropTypes.shape().isRequired,
};

Button.defaultProps = {
  busy: false,
  children: null,
  element: 'button',
  noRipple: false,
  onPointerDown() {},
  onPointerUp() {},
  spinnerProps: null,
};

export default withStyle(Button);
