import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Avatar } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import {connect} from 'react-redux';


class AccountScreen extends React.Component {
 render() {
   console.log('account props user >>>', this.props.user);
    const {navigate} = this.props.navigation;
    return (
     <View style={{ flex: 1, backgroundColor:'#fff', alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.bigWhite}>Account</Text>
        <Avatar large overlayContainerStyle={{backgroundColor: 'orange'}} rounded title={this.props.user.firstName[0] + this.props.user.lastName[0] } onPress={() => console.log("Works!")} activeOpacity={0.7}/>
        <Text style={{fontSize : 30}}>{this.props.user.firstName + ' ' + this.props.user.lastName}</Text>
        <Text style={{fontSize : 28}}>{this.props.user.email}</Text>
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

function mapStateToProps(state) {
  console.log('Dispatch Account : state UserData >>', state.userData);
 return { user: state.userData }
}

export default connect(mapStateToProps, null)(AccountScreen);
