import React from 'react';
import PropTypes from 'prop-types';

import {
  ActivityIndicator,
} from 'react-native';

const ActivityIndicatorNative = props => (
  <ActivityIndicator {...props} />
);

ActivityIndicatorNative.defaultProps = {
  color: '#0000ff',
  size: 'small',
};

ActivityIndicatorNative.propsTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  backgroundColor: PropTypes.string,
};

export default ActivityIndicatorNative;
