import React from 'react'
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Actions, ActionConst } from 'react-native-router-flux'

export default class SignUp extends React.Component {
  signUp() {
    Actions.loggedIn()
  }  
  render() {
      return (
        <View style={styles.page}>
          <FormLabel>
            <Text>Username</Text>
            <FormInput placeholder='Username'
            style={styles.input}/>
            <Text>Password</Text>
            <FormInput placeholder='Password must be at least 8 characters'
            style={styles.input}/>
            <Text>Confirm Password</Text>
            <FormInput placeholder='Passwords must match'
            style={styles.input}/>
          </FormLabel>
          <TouchableHighlight 
          style={styles.signupButton}
          title='Sign Up'
          onPress={this.signUp}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableHighlight>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    position: 'absolute',
    bottom: 400,  //this is how to align vertically
  },
  signupButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '25%',
    marginLeft: '25%',
    marginTop: '1%',
    backgroundColor:'blue',
    borderRadius: 5,
    borderWidth: 0,
    borderColor: '#fff',
    width: '50%',
    height: '30%',
  },
  input: {
    color: 'blue',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
