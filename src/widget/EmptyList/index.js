import React, { Component } from 'react'
import Icon from '../Icon';
import { View } from 'react-native'

export default class index extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#004f4f' }}>
        <Icon name='noData' size={200} />
      </View>
    )
  }
}
