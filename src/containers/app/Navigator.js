
import { createStackNavigator } from 'react-navigation';
import MainScreen from '../MainScreen';

const AppNavigator = createStackNavigator({
  MainScreen,
},{
  initialRouteName: 'MainScreen',
});

export default AppNavigator;
