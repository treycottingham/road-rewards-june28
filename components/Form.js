import React from 'react'
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Actions, ActionConst } from 'react-native-router-flux'

export default class Form extends React.Component {
  logIn() {
    Actions.loggedIn()
  }
  signUp() {
    Actions.signUp()
  }
  render() {
      return (
        <View style={styles.page}>
          <FormLabel>
            <Text>Username</Text>
            <FormInput placeholder='Username'
            style={styles.input}/>
            <Text>Password</Text>
            <FormInput placeholder='Password'
            style={styles.input}/>
          </FormLabel>
          <TouchableHighlight 
          style={styles.loginButton}
          title='Log In'
          onPress={this.logIn}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
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
    bottom: 475,  //this is how to align vertically
  },
  loginButton:{
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '25%',
    marginLeft: '25%',
    marginTop: '2%',
    backgroundColor:'green',
    borderRadius: 5,
    borderWidth: 0,
    borderColor: '#fff',
    width: '50%',
    height: '30%',
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
