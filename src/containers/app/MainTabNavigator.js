import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import MainScreen from '../MainScreen';
import SearchAnime from '../SearchAnime';
import SearchCharactor from '../SearchCharactor';
import TabIcons from './TabIcons';

function createNavigatiorItem(screen, screenName) {
  return createStackNavigator({
    [screenName]: { screen },
  });
}
export default createBottomTabNavigator(
  {
    Home: createStackNavigator({
      MainScreen,
    }),
    SearchAnime: createNavigatiorItem(SearchAnime, 'SearchAnime'),
    SearchCharactor: createNavigatiorItem(SearchCharactor, 'SearchCharactor'),
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {// eslint-disable-line

        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') iconName = 'home';
        else if (routeName === 'SearchAnime') iconName = 'SearchAnime';
        else if (routeName === 'SearchCharactor') iconName = 'SearchCharactor';

        return <TabIcons iconName={iconName} tintColor={tintColor} />;
      },
      tabBarVisible: true,
    }),
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#004f4f',
      inactiveTintColor: '#fff',
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: '#004f4d',
      },
      indicatorStyle: {
        color: 'red',
      },
    },
  },
);
