import React from 'react';
import PropTypes from 'prop-types';
import Provider from './Theme/Provider';

const DoczWrapper = ({ children }) => <Provider>{children}</Provider>;

DoczWrapper.propTypes = { children: PropTypes.node.isRequired };

export default DoczWrapper;
