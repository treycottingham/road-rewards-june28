import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import { KeepAwake } from 'expo'
import moment from 'moment'

const apiURL = 'https://road-rewards-1.herokuapp.com/users/1'

export default class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      start: moment(),
      counter: 0,
      points: 0,
      pointTotal: 0,
      isLoaded: false,
      pointData: 0,
      // pointDataIndex: this.pointData.pointTotal
    }
  }
  fetchPoints() {
    fetch(apiURL)
      .then(response => response.json())
        .then(points => {
          return this.setState({
            pointData: points.pointTotal,
            isLoaded:true})
          console.log('insidefetch',this.state.pointData)
        }).catch((err) => console.log('err', err))
  }
  componentDidMount() {
    this.fetchPoints()
  }
  signOut() {
    Actions.landing()
  }
  logPoints = () => {
    this.setState({
      pointTotal: this.pointData + this.points
    })
  }
  render() {
    setTimeout(() => {
      this.setState({
        counter: moment(),
        points: moment().diff(this.state.start, 'seconds')
      })
    }, 1000)
    console.log('THIS.STATE.POINTTOTAL', this.state.pointTotal)
    return (
      <View style={styles.container}>
        <KeepAwake />
        <Text style={styles.text}>Dashboard</Text>
        <View>
          <Text style={styles.text}>Points Earned This Session</Text>
          <Text style={styles.points}>{this.state.points}</Text>
          <Text style={styles.text}>Total Points Earned</Text>
          {this.state.isLoaded ? <Text style={styles.points}>{this.state.pointData}</Text> : <Text style={styles.points}>Unable to find points</Text>}
        </View>
        <TouchableHighlight 
        style={styles.dashButton}
        title='Add Points to Total'
        onPress={this.logPoints}
        >
          <Text style={styles.text}>Add Points to Total</Text>
        </TouchableHighlight>
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