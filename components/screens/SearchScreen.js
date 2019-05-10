import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, List, ListItem, Avatar } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import {connect} from 'react-redux';

var users = [
  { firstName: "Jean-Michel", lastName: "LeMaléfique", email: "jeanmichel@malefique.com", company: "OLoose", color: "#e67e22"},
  { firstName: "Bernard", lastName: "Doe", email: "bernard@doe.com", company: "De la Vega co.", color: "#3498db"},
  { firstName: "Tintin", lastName: "LeGiletJaune", email: "tintin@giletsjaunes.com", company: "GiletsJaunes.com", color: "#16a085"}
]

function mapDispatchToProps(dispatch) {
 return {
  handleContact : function(firstNameContact, lastNameContact, emailContact, companyNameContact) {
    dispatch( {
      type: 'addcontact',
      firstName : firstNameContact,
      lastName : lastNameContact,
      email : emailContact,
      companyName : companyNameContact
    } )
  }
 }
}

class SearchScreen extends React.Component {
 render() {
  return (
   <View style={{ flex: 1, backgroundColor:'#fff'}}>
    <Text style={styles.bigWhite}>Search</Text>
    <List containerStyle={{marginBottom: 20}}>
      {
        users.map((user, i) => (
          <ListItem
            key={i}
            avatar={
              <Avatar
                small
                rounded
                title={user.firstName[0] + user.lastName[0]}
                overlayContainerStyle={styles.avatarColor}
              />
            }
            title={user.firstName + ' ' + user.lastName}
            subtitle={
              <View style={styles.subtitle}>
                <Text style={styles.ratingText}>{user.email}</Text>
                <Text style={styles.ratingText}> company: {user.company}</Text>
              </View>
            }
            onPress={() => this.props.handleContact(user.firstName, user.lastName, user.email, user.company)}
          />
        ))
      }
      </List>
   </View>
  );
 }
}

var randomColor
var randomNumber = Math.random()
if (0 < randomNumber <= 0.24 ) {
  randomColor = '#e67e22'
} else if (0.25 <= randomNumber <= 0.49 ) {
  randomColor = '#3498db'
} else if (0.5 <= randomNumber <= 0.74 ) {
  randomColor = '#16a085'
} else {
  randomColor = '#e74c3c'
}

const styles = StyleSheet.create({
  bigWhite: {
    fontSize: 30,
    color: 'white',
  },
  subtitle:{
    flexDirection:'row',
    padding:10,
    paddingTop:5,
  },
  homeBtn: {
    textTransform: 'lowercase',
  },
  ratingText: {
     color: 'grey',
   },
   avatarColor: {
      backgroundColor: randomColor,
    }
});


export default connect(null, mapDispatchToProps)(SearchScreen);
