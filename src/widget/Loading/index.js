import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ActivityIndicator
} from 'react-native';

export default class ActivityIndicatorNative extends Component {
  render() {
    const { style,...restProps } = this.props;
    return (
      <ActivityIndicator style={style}  {...restProps} />
    )
  }
}

ActivityIndicatorNative.defaultProps = {
  color: "#0000ff",
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