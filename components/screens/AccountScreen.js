import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Avatar } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

export default class AccountScreen extends React.Component {
 render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={{ flex: 1, backgroundColor:'#fff', alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.bigWhite}>Account</Text>
        <Avatar large overlayContainerStyle={{backgroundColor: 'orange'}} rounded title="BD" onPress={() => console.log("Works!")} activeOpacity={0.7}/>
        <Text style={{fontSize : 30}}>Bernard Doez</Text>
        <Text style={{fontSize : 28}}>bernard@doe.com</Text>
        <Button large title="Disconnect" backgroundColor='#3498db' textStyle={styles.homeBtn} containerViewStyle={{margin: 20}} onPress={() => navigate('Home')} />
     </View>
    );
 }
}

const styles = StyleSheet.create({
  bigWhite: {
    fontSize: 30,
    color: 'white',
  },
  homeBtn: {
    textTransform: 'lowercase',
  }
});
