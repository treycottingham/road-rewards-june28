import React from 'react'
import { StyleSheet, View, TouchableHighlight } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Actions, ActionConst } from 'react-native-router-flux'
import { Container, Header, Title, Item, Content, Label, Input, Form, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import * as firebase from 'firebase'

import Logo from './Logo'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
    }
  }
  signUp = (email, password) => {
    try {
      if (this.state.password.length < 8) {
        alert('Password must be at least 8 characters')
        return
      } else if ((this.state.password !== this.state.passwordConfirm)) {
        alert('Passwords must match')
        return
      }
      firebase.auth().createUserWithEmailAndPassword(email, password).then(() => this.goToDash())
    } catch (error) {
      console.log(error.toString())
    }
  }
  goToDash() {
    Actions.dash()
  }  
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input 
              onChangeText={(email) => this.setState({email})}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input 
              onChangeText={(password) => this.setState({password})}
              secureTextEntry={true} />
            </Item>
            <Item floatingLabel last>
              <Label>Confirm Password</Label>
              <Input 
              onChangeText={(passwordConfirm) => this.setState({passwordConfirm})}
              secureTextEntry={true} />
            </Item>
            <Button bordered success
            style={styles.button}
            onPress={() => this.signUp(this.state.email, this.state.password)}>
              <Text>Sign Up</Text>
            </Button>
          </Form>
        </Content>
          <Logo />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 6,
    marginLeft: 16,
  },
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
  image: {
    width: 100,
    height: 50,
    position: "absolute",
    bottom: 8,
    right: 8,
  },
})

{/* <View style={styles.page}>
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
  <Logo />
</View> */}