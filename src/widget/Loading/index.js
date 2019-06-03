import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ActivityIndicator
} from 'react-native';

export default class ActivityIndicatorNative extends Component {
  render() {
    const { ...restProps } = this.props;
    return (
      <ActivityIndicator  {...restProps} />
    )
  }
}

ActivityIndicatorNative.defaultProps = {
  color: "#0000ff",
  size: 'small',
  backgroundColor: 'transparent',
};

ActivityIndicatorNative.propsTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  backgroundColor: PropTypes.string,
};