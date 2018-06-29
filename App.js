import React from 'react'
import { Router, Stack, Scene, ActionConst } from 'react-native-router-flux'

import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp'
import FadeView from './components/FadeView'

export default class App extends React.Component {
  render() {
    return (
      <Router>        
        <Stack key="root">
          <Scene hideNavBar={true} key="landing" component={FadeView} />
          {/* <Scene hideNavBar={true} key="landing" component={Landing} /> */}
          <Scene hideNavBar={true} key="loggedIn" component={Dashboard} />
          <Scene hideNavBar={true} key="signUp" component={SignUp} />
        </Stack>
      </Router>
    )
  }
}

// Eventually I will have to pass "id" as a prop down to the dashboard component