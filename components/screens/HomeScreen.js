import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

export default class HomeScreen extends React.Component {
 render() {
  const {navigate} = this.props.navigation;
  return (
   <View>
    <ImageBackground source={require('../../assets/network.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={styles.homeContainer}>
        <Text style={styles.bigWhiteTitle}>Whol'Uppp</Text>
        <Text style={styles.bigWhite}>Start your networking now and everywhere</Text>
        <Button large title="Sign In" backgroundColor='#3498db' textStyle={styles.homeBtn} containerViewStyle={{margin: 20}} onPress={() => navigate('SignIn')} />
        <Button large title="Sign Up" backgroundColor='#3498db' textStyle={styles.homeBtn} onPress={() => navigate('SignUp')} />
      </View>
    </ImageBackground>
   </View>
  );
 }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  bigWhite: {
    fontSize: 30,
    color: 'white',
  },
  bigWhiteTitle: {
    fontSize: 40,
    color: 'white',
  },
  homeBtn: {
    textTransform: 'lowercase',
  }
});
