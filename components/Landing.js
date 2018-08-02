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
        // <Container style={styles.container}>
        <Container style={styles.container}>
          {/* <ImageBackground
            style={styles.background}
            source={require('../blurredbackground.jpg')}
            >
            <Text>Hi</Text>
          </ImageBackground> */}
          <FadeView />
            <Button bordered full success style={styles.button} onPress={this.logInButton}><Text style={styles.buttonText}>Log In</Text></Button>
            <Button bordered full success style={styles.button} onPress={this.signUpButton}><Text style={styles.buttonText}>SignUp</Text></Button>
        </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    // alignItems: 'flex-end',
    width: '100%',
    height: '100%',
    // marginLeft: 65,
  },
  button: {
    width: '100%',
  },
  buttonText: {
  },
  image: {
    width: 100,
    height: 50,
    position: "absolute",
    bottom: 8,
    right: 8,
  },
})