import React, { Component } from 'react'
import { View } from 'react-native'
import Text from '../Text';
import Icon from '../Icon';

export default class index extends Component {
  render() {
    return (
      <View style={{ alignSelf: 'center' }}>
        <Icon color='#fff' name='wifi' size={180} />
        <Text style={{ alignSelf: 'center',color:'#fff',fontSize: 13 }}>Swipe Down to Referesh</Text>
      </View>
    )
  }
}
