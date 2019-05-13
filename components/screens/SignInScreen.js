import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import {connect} from 'react-redux';


class SignInScreen extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    email: '',
    password: '',
    displayError : false
  };
  this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit() {
  var ctx = this
  fetch(`http://10.2.1.57:3000/signin?email=${this.state.email}&password=${this.state.password}`)
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    if (data.result) {
      ctx.props.handleUserValid(data.user.firstName, data.user.lastName, data.user.email, data.user.token)
      ctx.props.navigation.navigate('Account')
      console.log('data fetch de signin >>', data);
    } else {
      ctx.setState({displayError : true})
    }
  })
  .catch(function(error) {
  console.log('There has been a problem with your fetch operation: ' + error.message);
   // ADD THIS THROW error
    throw error;
  });
}

 render() {
   var errorMsg
   if (this.state.displayError) {
     errorMsg = <FormValidationMessage>Erreur d'identification magl, ça dégage</FormValidationMessage>
   }
   return (
     <View style={{ flex: 1, backgroundColor:'#fff', alignItems: 'center', justifyContent: 'center'}}>
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
        {errorMsg}
      <Button large title="Sign In" backgroundColor='#3498db' textStyle={styles.homeBtn} containerViewStyle={{margin: 20}} onPress={this.handleSubmit} />
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
  console.log('Dispatch Signin >>', dispatch);
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

export default connect(null, mapDispatchToProps)(SignInScreen);
