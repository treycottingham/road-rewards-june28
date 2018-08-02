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
      id: null,
      email: '',
      startingMoment: moment(),
      currentMoment: 0,
      storedPoints: 0,
      counter: 0,
      pointTotal: 0,
      isLoaded: false,
    }
  }
  componentDidMount() {
    this.fetchPoints(this.props.id)
  }
  fetchPoints(id) {
    fetch(apiURL + id)
      .then(response => response.json())
      .then(user => {
        console.log('USER IN FETCHPOINTS', user)
        var pointImport = user.pointTotal
        var userID = user.id
        this.setState({
          storedPoints: pointImport,
          id: userID,
          isLoaded: true
        })
      }).catch((err) => console.log('err', err))
    }
  logPoints = () => {
    var storedPoints = this.state.storedPoints + this.state.counter
    console.log('STOREDPOINTS', storedPoints)
    this.setState({
      storedPoints: storedPoints,
      startingMoment: moment()
    })
    this.updatePoints(storedPoints)
  }
  updatePoints = (data) => {
    let pointsPosted = {
      pointTotal: data
    }
    console.log('DATA', data, 'POINTSPOSTED', pointsPosted, 'ID', this.state.id)
    fetch(apiURL + this.state.id, {
      method: 'PUT',
      body: JSON.stringify(pointsPosted),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
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
          <Content style={{marginTop: 150}}>
            <Text
            style={styles.bigText}
            >Points Earned This Session</Text>
            <ImageBackground
            style={styles.background}
            source={require('../odometer.jpg')}
            >
              <Text
              style={styles.text}
              >{this.state.counter}</Text>
            </ImageBackground>
            <Text
            style={styles.bigText}
            >Total Points Earned</Text>
            <ImageBackground
            style={styles.background}
            source={require('../odometer.jpg')}
            >
              {this.state.isLoaded ? <Text style={styles.pointTotal}>{this.state.storedPoints}</Text> : <Text style={styles.pointTotal}>Loading...</Text>}
            </ImageBackground>
            <Container>
              <Button bordered success
                onPress={this.logPoints}
                style={{marginLeft: 50, marginTop: 10}}>
                  <Text>Add Points to Total</Text>
              </Button>
              <Button bordered success
                onPress={this.signOut}
                style={{marginLeft: 92, marginTop: 10}}>
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
  bigText: {
    marginTop: 6,
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'TrebuchetMS',
  },
  pointTotal: {
    color: 'white',
    letterSpacing: 18,
    // marginLeft: 40,
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
    width: 150,
    height: 25,
    marginLeft: 65,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    letterSpacing: 18,
    // marginLeft: 40,
  },
})

post = (data) => {
  const url = `https://mo-jobs-database.herokuapp.com/company/`

  let content = {
    company: data.companyName,
    resume: data.resume,
    cover_letter: data.coverLetter,
    date_applied: data.dateApplied,
    interview_date: data.dateInterview,
    description: data.description,
    technologies: data.requiredTechnology
  };

  console.log('contnet', content)

  fetch(url, {
      method: 'POST',
      body: JSON.stringify(content),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(company => {
      console.log('response', company)
      this.props.setCompany(company)
    })
    .catch(function (error) {
      console.log('error')
    })

}