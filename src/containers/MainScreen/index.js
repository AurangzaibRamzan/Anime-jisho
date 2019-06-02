import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import  AllChallenges  from '../../grahql/index';

import { Text, View } from 'react-native'

class MainScreen extends Component {
  render() {
    console.log(this.props)
    return (
      <View>
        <Text> Anime Jisho </Text>
      </View>
    )
  }
}

export default  graphql(AllChallenges)(MainScreen);