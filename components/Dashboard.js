import React from 'react'
import { StyleSheet, View, ImageBackground, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { KeepAwake } from 'expo'
import moment from 'moment'
import { Container, Header, Title, Input, Content, Form, Item, Label, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import Logo from './Logo'

const apiURL = 'https://road-rewards-1.herokuapp.com/users/'

export default class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 1,
      startingMoment: moment(),
      currentMoment: 0,
      storedPoints: 0,
      counter: 0,
      pointTotal: 0,
      isLoaded: false,
    }
  }
  componentDidMount() {
    this.fetchPoints()
  }
  fetchPoints() {
    fetch(apiURL + this.state.id)
      .then(response => response.json())
      .then(user => {
        // console.log('USER', user)
        // var pointMap = points.users.map(user => user.pointTotal)
        var pointImport = user.pointTotal
        this.setState({
          storedPoints: pointImport,
          isLoaded: true
        })
      }).catch((err) => console.log('err', err))
  }
  logPoints = () => {
    // console.log('THIS.STATE.CURRENTMOMENT', this.state.currentMoment)
    // console.log('THIS.STATE.POINTTOTAL', this.state.pointTotal)
    // console.log('THIS.STATE.COUNTER', this.state.counter)
    // console.log('THIS.STATE.STOREDPOINTS', this.state.storedPoints)
    var storedPoints = this.state.storedPoints + this.state.counter
    console.log('STOREDPOINTS', storedPoints)
    this.setState({
      storedPoints: storedPoints,
      startingMoment: moment()
    })
    // console.log('THIS.STATE.STOREDPOINTS', this.state.storedPoints)
    this.updatePoints(storedPoints)
  }
  updatePoints = (data) => {
    let pointsPosted = {
      pointTotal: data
    }
    // console.log('DATA', data, 'POINTSPOSTED', pointsPosted, 'ID', this.state.id)
    fetch(apiURL + this.state.id, {
      method: 'PUT',
      body: JSON.stringify(pointsPosted),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    // .then(user => {
    //   this.props.setUser(user)
    // })
    .catch(function (error) {
      console.log('error')
    })
  }
  signOut() {
    Actions.landing()
  }
  render() {
    setTimeout(() => {
      this.setState({
        currentMoment: moment(),
        counter: moment().diff(this.state.startingMoment, 'seconds')
      })
    }, 1000) //140 is speed I could double press
    return (
      <Container>
        <Header />
        <KeepAwake />
        <Container style={styles.container}>
          <Content style={{marginTop: 200, textAlign: 'center'}}>
            <Text
            style={styles.leftTopMargin}
            >Points Earned This Session</Text>
            <ImageBackground
            style={styles.background}
            source={require('../odometer.jpg')}
            >
              <Text
              style={styles.pointTotal}
              >{this.state.counter}</Text>
            </ImageBackground>
            {/* <Text
            style={styles.leftTopMargin}
            >{this.state.counter}</Text> */}
            <Text
            style={styles.leftTopMargin}
            >Total Points Earned</Text>
            <ImageBackground
            style={styles.background}
            source={require('../odometer.jpg')}
            >
              {this.state.isLoaded ? <Text style={styles.pointTotal}>{this.state.storedPoints}</Text> : <Text>Loading...</Text>}
            </ImageBackground>
            <Container>
              <Button bordered success
                onPress={this.logPoints}
                style={{marginLeft: 28, marginTop: 10}}>
                  <Text>Add Points to Total</Text>
              </Button>
              <Button bordered success
                onPress={this.signOut}
                style={{marginLeft: 68, marginTop: 10}}>
                  <Text>Log Out</Text>
              </Button>
            </Container>
          </Content>
        </Container>
        <Logo />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  leftTopMargin: {
    marginTop: 6,
    marginLeft: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  pointTotal: {
    color: 'white',
    // paddingRight: 20,
    letterSpacing: 8.5,
  },
  image: {
    width: 100,
    height: 50,
    position: "absolute",
    bottom: 8,
    right: 8,
  },
  background: {
    flex: 1,
    alignItems: 'flex-end',
    width: 100,
    marginLeft: 65,
  },
  container: {
    flex: 1,
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  points: {
    // textAlign: 'center',
    // marginTop: '2%',
  },
  logOutButton: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginRight: '25%',
    // marginLeft: '25%',
    // paddingTop: '1%',
    // backgroundColor: 'yellow',
    // borderRadius: 5,
    // borderWidth: 0,
    // borderColor: '#fff',
    // width: '50%',
    // height: '8%',
  },
  dashButton: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginRight: '25%',
    // marginLeft: '25%',
    // backgroundColor: 'gray',
    // borderRadius: 50,
    // borderWidth: 0,
    // borderColor: '#fff',
    // width: '50%',
    // height: '18%',
  },
  text: {
    // fontSize: 20,
    // fontWeight: 'bold',
    // padding: 0,
    // marginTop: '12%',
  },
  buttonText: {
    // fontSize: 20,
    // fontWeight: 'bold',
  }
})

// <Container>
// {/*<View style={styles.container}>*/}
//   <KeepAwake />
//   {/* <Text style={styles.text}>Dashboard</Text> */}
//   <Text>Dashboard</Text>
//   {/* <View> */}
//   <Container>
//     <Text style={styles.text}>Points Earned This Session</Text>
//     <Text style={styles.points}>{this.state.counter}</Text>
//     <Text style={styles.text}>Total Points Earned</Text>
//     {this.state.isLoaded ? <Text style={styles.points}>{this.state.storedPoints}</Text> : <Text style={styles.points}>Unable to find points</Text>}
//   <Button bordered light>
//     <Text>Add Points to Total</Text>
//   </Button>
//   </Container>
//   {/* </View> */}
//   <TouchableHighlight
//     style={styles.dashButton}
//     title='Add Points to Total'
//     onPress={this.logPoints}
//   >
//     <Text style={styles.text}>Add Points to Total</Text>
//   </TouchableHighlight>
//   <TouchableHighlight
//     style={styles.logOutButton}
//     title='Sign Out'
//     onPress={this.signOut}
//   >
//     <Text style={styles.buttonText}>Sign Out</Text>
//   </TouchableHighlight>
//   {/* </View> */}
// </Container>