import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import Screens from './Navigation.screen'
import { stackOptions, tabBarOptions } from './Navigation.option'

const HomeStack = createStackNavigator({
  Home: Screens.Home
}, {
  defaultNavigationOptions: stackOptions
});

const MyFavouriteStack = createStackNavigator({
  MyFavourite: Screens.MyFavourite,
}, {
  defaultNavigationOptions: stackOptions
});

const AppNavigator = createBottomTabNavigator({
  Home: HomeStack,
  MyFavourite: MyFavouriteStack
},{
  tabBarOptions
});


export default createAppContainer(AppNavigator);



