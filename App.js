import React from 'react'
import { Router, Stack, Scene, ActionConst } from 'react-native-router-flux'

import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp'
import LoginForm from './components/LoginForm'
import FadeView from './components/FadeView'

import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA2seVYrVMi-IW0MHISxmRFrdhxHHS6MH4",
  authDomain: "road-rewards-with-auth.firebaseapp.com",
  databaseURL: "https://road-rewards-with-auth.firebaseio.com",
  projectId: "road-rewards-with-auth",
  storageBucket: "",
}

firebase.initializeApp(firebaseConfig)


export default class App extends React.Component {
  render() {
    return (
      <Router>        
        <Stack key="root">
          {/* <Scene hideNavBar={true} key="landing" component={FadeView} /> */}
          <Scene hideNavBar={true} key="landing" component={Landing} />
          <Scene hideNavBar={true} key="login" component={LoginForm} />
          <Scene hideNavBar={true} key="dash" component={Dashboard} />
          <Scene hideNavBar={true} key="signup" component={SignUp} />
        </Stack>
      </Router>
    )
  }
}

// Eventually I will have to pass "id" as a prop down to the dashboard component