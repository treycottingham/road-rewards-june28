import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'

import Form from './Form'

export default class Landing extends React.Component {
    render() {
      return (
        <ImageBackground
          style={styles.image}
          source={require('../background.png')}
        >
          <Form />
        </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
})