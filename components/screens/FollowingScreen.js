import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, List, ListItem, Avatar } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import {connect} from 'react-redux';


function mapStateToProps(state) {
 return { contacts: state.contactsList }
}

class FollowingScreen extends React.Component {
 render() {
  var contactListItem = this.props.contacts.map((contact, i) => (
    <ListItem
      key={i}
      avatar={
        <Avatar
          small
          rounded
          title={contact.firstName[0] + contact.lastName[0]}
          overlayContainerStyle={{backgroundColor: contact.color}}
        />
      }
      title={contact.firstName + ' ' + contact.lastName}
      subtitle={
        <View style={styles.subtitle}>
          <Text style={styles.ratingText}>{contact.email}</Text>
          <Text style={styles.ratingText}> company: {contact.companyName}</Text>
        </View>
      }
    />
  ))
  return (
   <View style={{ flex: 1, backgroundColor:'#fff'}}>
    <List containerStyle={{marginBottom: 20}}>
      {contactListItem}
    </List>
   </View>
  );
 }
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
   }
});

export default connect(mapStateToProps, null)(FollowingScreen);
