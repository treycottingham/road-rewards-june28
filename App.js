import React from 'react'
import { StyleSheet } from 'react-native'
import { Router, Stack, Scene, ActionConst } from 'react-native-router-flux'
import KeepAwake from 'react-native-keep-awake'

import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp'

export default class App extends React.Component {
  render() {
    return (
      <Router>        
        <Stack key="root">
          <Scene hideNavBar={true} key="landing" component={Landing} />
          <Scene hideNavBar={true} key="loggedIn" component={Dashboard} />
          <Scene hideNavBar={true} key="signUp" component={SignUp} />
        </Stack>
      </Router>
    )
  }
}