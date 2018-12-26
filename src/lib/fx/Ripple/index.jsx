import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import Atom from '../../atoms/Atom';
import withStyle from '../../Theme/withStyle';

import Wave from './Wave';

const getInnerBounds = ({ target }) => {
  try {
    const el = window.getComputedStyle(target, null);
    return {
      innerHeight: parseFloat(el.getPropertyValue('height')),
      innerWidth: parseFloat(el.getPropertyValue('width')),
    };
  } catch {
    const { clientHeight, clientWidth } = target;
    return {
      innerHeight: clientHeight,
      innerWidth: clientWidth,
    };
  }
};

const getBounds = ({ target }) => {
  const { clientHeight, clientWidth } = target;
  const { top, left } = target.getBoundingClientRect();
  return {
    height: clientHeight,
    width: clientWidth,
    top,
    left,
  };
};

class Ripple extends Component {
  state = {
    outline: null,
    waves: [],
  }
  get backgroundColor() {
    const { color, getColor } = this.props;
    return getColor(color);
  }
  get outline() {
    const { outline, waves } = this.state;
    if (!outline || waves.length) return null;
    return <Wave {...outline} />;
  }
  get waves() {
    return this.state.waves.map(({ created, released, ...wave }) => (
      <Wave
        key={created}
        {...wave}
        onDissolve={this.makeTransitionHandler(created)}
        released={released}
      />
    ));
  }
  makeTransitionHandler = created => () => this.setState(({ waves }) => ({
    waves: waves.filter(wave => wave.created !== created),
  }))
  pushEvent = (event) => {
    const { left, top, width, height } = getBounds(event);
    const size = (((width ** 2) + (height ** 2)) ** 0.5) * 2;
    const halfSize = size / 2;
    this.pushWawe({
      created: performance.now(),
      released: false,
      size,
      style: {
        backgroundColor: this.backgroundColor,
        left: `${event.clientX - left - halfSize}px`,
        top: `${event.clientY - top - halfSize}px`,
        zIndex: 2,
      },
    });
  };
  release = () => {
    this.setState(({ waves }) => ({
      waves: waves.map(wave => ({
        ...wave,
        released: true,
      })),
    }));
  }
  removeFocus = () => this.setState({ outline: null })
  setFocus = (event, { current }) => {
    const { width: innerWidth, height: innerHeight } = current.getBoundingClientRect();
    const { width, height } = getBounds(event);
    const size = Math.max(innerHeight, innerWidth, 32);
    const halfSize = size / 2;

    this.setState(({ waves }) => {
      if (waves.length) return null;
      return {
        outline: {
          size,
          style: {
            backgroundColor: this.backgroundColor,
            left: `${width / 2 - halfSize}px`,
            top: `${height / 2 - halfSize}px`,
            transform: `translate(-${size}px, -${size}px)`,
            zIndex: 2,
          },
        },
      };
    });
  }

  pushWawe(wawe) {
    this.setState(({ waves }) => ({
      waves: waves.concat(wawe),
    }));
  }
  render() {
    return (
      <Atom
        element="span"
        style={{
          background: 'none',
          borderRadius: 'inherit',
          display: 'block',
          overflow: 'hidden',
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Atom
          element="span"
          style={{
            backgroundColor: this.backgroundColor,
            ...this.props.style,
          }}
        />
        {this.waves}
        {this.outline}
      </Atom>
    );
  }
}


Ripple.propTypes = {
  color: PropTypes.string,
  getColor: PropTypes.func.isRequired,
  style: PropTypes.shape().isRequired,
};
Ripple.defaultProps = {
  color: null,
};

export default withStyle(Ripple);
