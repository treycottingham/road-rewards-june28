import React from 'react'
import { StyleSheet, Image, ImageBackground } from 'react-native'
import { Container, Form, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Input } from 'native-base'
import { Actions, ActionConst } from 'react-native-router-flux'

import FadeView from './FadeView'
import Feedback from './Feedback'
import LoginForm from './LoginForm'
import SignUp from './SignUp'
import Logo from './Logo'

export default class Landing extends React.Component {
  logInButton = () => {
    Actions.login()
  }
  signUpButton = () => {
    Actions.login({passwordConfirm : true})
  }
    render() {
      return (
        <Container>
          <Container style={styles.container}>
            <Text style={styles.bigText}>The App Formerly Known As:</Text>
            <FadeView />
            <Button bordered full success style={styles.button} onPress={this.logInButton}><Text style={styles.buttonText}>Log In</Text></Button>
            <Button bordered full success style={styles.button} onPress={this.signUpButton}><Text style={styles.buttonText}>SignUp</Text></Button>
            <Text>IMPORTANT: Due to a trademark issue, we will be changing the company name before our official launch.  In the meantime, your feedback is vitally important to improving the app.  Thank you so much to all of our Alpha testers for being part of this journey, we are very excited for the future of this venture.</Text>
          </Container>
          <Feedback />
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
  bigText: {
    marginTop: 6,
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'TrebuchetMS',
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