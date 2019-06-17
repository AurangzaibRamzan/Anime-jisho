
import { createStackNavigator } from 'react-navigation';

import MainScreen from './MainTabNavigator';
import Character from '../Character';
import Anime from '../Anime';
import PopularAnime from '../PopularAnime';
import HighlyAnticipated from '../HighlyAnticiptingAnime';
import HighestRated from '../HighestRatedAnime';
import AllTimePopular from '../AllTimePopularAnime';

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
},
{
  initialRouteName: 'MainScreen',
});

export default AppNavigator;
