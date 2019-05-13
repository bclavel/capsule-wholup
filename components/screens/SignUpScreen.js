import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import {connect} from 'react-redux';


class SignUpScreen extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleSubmit() {
    var ctx = this
    fetch('http://10.2.1.57:3000/signup', {
     method: 'POST',
     headers: {'Content-Type':'application/x-www-form-urlencoded'},
     body: `firstName=${this.state.firstName}&lastName=${this.state.lastName}&email=${this.state.email}&password=${this.state.password}`
    })
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      console.log('fetch data de sign up >>', data);
      ctx.props.handleUserValid(data.user.firstName, data.user.lastName, data.user.email, data.user.token)
      ctx.props.navigation.navigate('Account')
    })
    .catch(function(error) {
    console.log('There has been a problem with your fetch operation mec: ' + error.message);
      throw error;
    });
  }

   render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor:'#fff', alignItems: 'center', justifyContent: 'center'}}>
       <FormLabel labelStyle={{fontSize: 20}}>First Name</FormLabel>
       <FormInput
           onChangeText={(value) => this.setState({firstName : value})}
           value={this.state.firstName}
           containerStyle={styles.formBorder}
         />
       <FormLabel labelStyle={{fontSize: 20}}>Last Name</FormLabel>
       <FormInput
           onChangeText={(value) => this.setState({lastName : value})}
           value={this.state.lastName}
           containerStyle={styles.formBorder}
         />
       <FormLabel labelStyle={{fontSize: 20}}>Email</FormLabel>
       <FormInput
           onChangeText={(value) => this.setState({email : value})}
           value={this.state.email}
           containerStyle={styles.formBorder}
         />
       <FormLabel labelStyle={{fontSize: 20}}>Password</FormLabel>
       <FormInput
           onChangeText={(value) => this.setState({password : value})}
           value={this.state.password}
           containerStyle={styles.formBorder}
           secureTextEntry={true}
         />
       <Button large title="Sign Up" backgroundColor='#3498db' textStyle={styles.homeBtn} containerViewStyle={{margin: 20}} onPress={this.handleSubmit} />
      </View>
    );
 }
}

const styles = StyleSheet.create({
  homeBtn: {
    textTransform: 'lowercase',
  },
  formBorder : {
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 1,
  }
});

function mapDispatchToProps(dispatch) {
  console.log('Dispatch Signup >>', dispatch);
 return {
  handleUserValid : function(firstNameUser, lastNameUser, emailUser, tokenUser) {
    dispatch( {
      type: 'setUserData',
      firstName : firstNameUser,
      lastName : lastNameUser,
      email : emailUser,
      token : tokenUser
    })
  }
 }
}

export default connect(null, mapDispatchToProps)(SignUpScreen);
