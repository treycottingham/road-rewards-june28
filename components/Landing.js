import React from 'react'
import { StyleSheet, Image, ImageBackground } from 'react-native'
import { Container, Form, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'

import LoginForm from './LoginForm'
import Logo from './Logo'

export default class Landing extends React.Component {
    render() {
      return (
        <Container>
          <LoginForm />
          <Logo />
        </Container>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 50,
    position: "absolute",
    bottom: 8,
    right: 8,
  },
})