import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Screens from './Navigation.screen'
import stackOptions from './Navigation.option'

const AppNavigator = createStackNavigator({
  Home: Screens.Home
},
  {
    defaultNavigationOptions: stackOptions
  }
);
export default createAppContainer(AppNavigator);
