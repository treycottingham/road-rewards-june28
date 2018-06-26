import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import { KeepAwake } from 'expo'
import moment from 'moment'

export default class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      start: moment(),
      points: 0
    }
  }
  signOut() {
    Actions.landing()
  }
  render() {
    setTimeout(() => {
      this.setState({
        counter: moment().format('LT') // changing moment.js in node modules to omit the AM/PM
        
      })
    }, 60000)
    console.log('HELLOOOOOOOOOO', this.state.start)
    return (
      <View style={styles.container}>
        <KeepAwake />
        <Text style={styles.text}>Dashboard</Text>
        <View>
          <Text style={styles.text}>Points Earned</Text>
          {/* <Text style={styles.points}>{this.state.counter}</Text> */}
          <Text style={styles.points}></Text>
          {/* <Text style={styles.points}>{this.state.start}</Text> */}
        </View>
        {/* <TouchableHighlight 
        style={styles.dashButton}
        title='Log In'
        onPress={this.logIn}
        >
          <Text style={styles.text}>Push to Start/Stop</Text>
        </TouchableHighlight> */}
        <TouchableHighlight 
        style={styles.logOutButton}
        title='Sign Out'
        onPress={this.signOut}
        >
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  points: {
    textAlign: 'center',
    marginTop: '2%',
  },
  logOutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '25%',
    marginLeft: '25%',
    paddingTop: '1%',
    backgroundColor: 'yellow',
    borderRadius: 5,
    borderWidth: 0,
    borderColor: '#fff',
    width: '50%',
    height: '8%',
  },
  dashButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '25%',
    marginLeft: '25%',
    // paddingTop: '1%',
    backgroundColor: 'gray',
    borderRadius: 50,
    borderWidth: 0,
    borderColor: '#fff',
    width: '50%',
    height: '18%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 0,
    marginTop: '12%',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})