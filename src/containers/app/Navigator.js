
import { createStackNavigator } from 'react-navigation';

import MainScreen from './MainTabNavigator';
import Character from '../Character';
import Anime from '../Anime';
import PopularAnime from '../../containers/PopularAnime';
import HighlyAnticipated from '../../containers/HighlyAnticiptingAnime';
import HighestRated from '../../containers/HighestRatedAnime';
import AllTimePopular from '../../containers/AllTimePopularAnime';

const AppNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      header: null,
    },

  },
  Anime,
  Character,
  PopularAnime,
  HighlyAnticipated,
  HighestRated,
  AllTimePopular,
}, {
    initialRouteName: 'MainScreen',
  });

export default AppNavigator;
