import React from 'react';
import { View } from 'react-native';

import Icon from '../Icon';

const styles = {
  viewStyle: {
    backgroundColor: '#004f4f',
  },
};

const EmptyList = props => (
  <View style={styles.viewStyle}>
    <Icon name='noData' size={200} />
  </View>
);

export default EmptyList;
