import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Base from './Base';
import Container from './Container';

const Input = ({
  append,
  defaultValue,
  label,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  prepend,
  value,
  ...rest
}) => {
  const [hasFocus, setHasFocus] = useState(false);
  const [localValue, setLocalValue] = useState(value || defaultValue);
  const [labelWidth, setLabelWidth] = useState(0);
  const componentValue = value || localValue;
  const hasAddons = (prepend || append) && true;
  const labelIsActive = hasFocus || componentValue !== '';
  return (
    <Container
      {...rest}
      hasAddons={hasAddons}
      labelIsActive={labelIsActive}
      labelWidth={labelWidth}
    >
      {prepend}
      <Base
        {...rest}
        hasFocus={hasFocus}
        label={label}
        labelIsActive={labelIsActive}
        onChange={event => {
          setLocalValue(event.target.value);
          onChange(event);
        }}
        onBlur={event => {
          setHasFocus(false);
          onBlur(event);
        }}
        onFocus={event => {
          setHasFocus(true);
          onFocus(event);
        }}
        placeholder={placeholder}
        setLabelWidth={setLabelWidth}
        value={componentValue}
      />
      {append}
    </Container>
  );
};

Input.displayName = 'Input';
Input.propTypes = {
  append: PropTypes.node,
  defaultValue: PropTypes.node,
  label: PropTypes.node,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  outlined: PropTypes.bool,
  placeholder: PropTypes.node,
  prepend: PropTypes.node,
  value: PropTypes.node,
};
Input.defaultProps = {
  append: null,
  defaultValue: '',
  label: null,
  onBlur() {},
  onChange() {},
  onFocus() {},
  outlined: false,
  placeholder: null,
  prepend: null,
  value: null,
};

export default Input;
