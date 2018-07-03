import React from 'react'
import { StyleSheet, Image, ImageBackground } from 'react-native'
import { Container, Form, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import { Actions, ActionConst } from 'react-native-router-flux'

import FadeView from './FadeView'
import LoginForm from './LoginForm'
import SignUp from './SignUp'
import Logo from './Logo'

export default class Landing extends React.Component {
  logInButton = () => {
    Actions.login()
  }
  signUpButton = () => {
    Actions.signup()
  }
    render() {
      return (
        <Container style={styles.container}>
          <FadeView />
          {/* {this.state.loginShown ? <LoginForm /> : null}
          {this.state.signupShown ? <SignUp /> : null} */}
          {/* <Container style={styles.buttonContainer}> */}
            <Button bordered full success style={styles.button} onPress={this.logInButton}><Text style={styles.buttonText}>Log In</Text></Button>
            <Button bordered full success style={styles.button} onPress={this.signUpButton}><Text style={styles.buttonText}>SignUp</Text></Button>
          {/* </Container> */}
          {/* <Logo /> */}
        </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '50%',
    // marginLeft: '35%',
    // marginTop: '5%',
  },
  button: {
    width: '100%',
  },
  buttonText: {
    // marginLeft: '38%'
    // textAlign: 'center'
  },
  image: {
    width: 100,
    height: 50,
    position: "absolute",
    bottom: 8,
    right: 8,
  },
})