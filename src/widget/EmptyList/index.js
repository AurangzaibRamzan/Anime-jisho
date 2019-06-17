import React, { Component } from 'react';
import { View } from 'react-native';

import Icon from '../Icon';

export default class EmptyList extends Component {
  render() {
    const ViewStyle = { backgroundColor: '#004f4f' };
    return (
      <View style={ViewStyle}>
        <Icon name='noData' size={200} />
      </View>
    );
  }
}
