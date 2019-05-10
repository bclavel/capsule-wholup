import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import contactsList from './contact.reducer';

import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Navigation from './components/Navigation';

import {createStore, combineReducers}  from 'redux';
const store = createStore(combineReducers({contactsList}));

class App extends React.Component {
  render() {
      return (
        <Provider store={store}>
          <Navigation />
        </Provider>
      )
    }
  }

export default App
