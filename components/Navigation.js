import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreen';
import SearchScreen from './screens/SearchScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import FollowingScreen from './screens/FollowingScreen';

var BottomNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Account: AccountScreen,
    Search: SearchScreen,
    Following: FollowingScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        var iconName;
        if (navigation.state.routeName == 'Account') {
          Platform.OS === 'ios'
          ? iconName = 'ios-information-circle'
          : iconName = 'md-information-circle'
        } else if (navigation.state.routeName == 'Search') {
          Platform.OS === 'ios'
          ? iconName = 'ios-search'
          : iconName = 'md-search'
        } else if (navigation.state.routeName == 'Following') {
          Platform.OS === 'ios'
          ? iconName = 'ios-people'
          : iconName = 'md-people'
        } else if (navigation.state.routeName == 'Home') {
          Platform.OS === 'ios'
          ? iconName = 'ios-home'
          : iconName = 'md-home'
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

var StackNavigator = createStackNavigator({
  BottomNavigator: BottomNavigator,
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
}, { headerMode: 'none'})

export default Navigation = createAppContainer(StackNavigator)
