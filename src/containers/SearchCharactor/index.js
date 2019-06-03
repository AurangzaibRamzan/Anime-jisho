import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class index extends Component {
  static navigationOptions = () => ({
    header: null,
  });
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
