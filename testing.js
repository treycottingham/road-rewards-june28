import Landing from "./components/Dashboard";

DASHBOARD
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



LOGINFORM
//  <Container style={styles.page}>
//   <FormLabel>
//     <Text>Username</Text>
//     <FormInput placeholder='Username'
//     style={styles.input}/>
//     <Text>Password</Text>
//     <FormInput placeholder='Password'
//     style={styles.input}/>
//   </FormLabel>
//   <TouchableHighlight 
//   style={styles.loginButton}
//   title='Log In'
//   onPress={this.logIn}
//   >
//     <Text style={styles.buttonText}>Login</Text>
//   </TouchableHighlight>
//   <TouchableHighlight 
//   style={styles.signupButton}
//   title='Sign Up'
//   onPress={this.signUp}
//   >
//     <Text style={styles.buttonText}>Sign Up</Text>
//   </TouchableHighlight>
// </Container>



LANDING
// import React from 'react'
// import { StyleSheet, Image, ImageBackground } from 'react-native'
// import { Container, Form, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'

// import LoginForm from './LoginForm'
// import SignUp from './SignUp'
// import Logo from './Logo'

// import * as firebase from 'firebase'

// // const firebaseConfig = {
// //   apiKey: "AIzaSyA2seVYrVMi-IW0MHISxmRFrdhxHHS6MH4",
// //   authDomain: "road-rewards-with-auth.firebaseapp.com",
// //   databaseURL: "https://road-rewards-with-auth.firebaseio.com",
// //   projectId: "road-rewards-with-auth",
// //   storageBucket: "",
// // }

// // firebase.initializeApp(firebaseConfig)

// export default class Landing extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       logInIsShown: false,
//       signUpIsShown: false,
//       logInButtonShown: true,
//       signUpButtonShown: true,
//     }
//   }  
//     showLogin = () => {
//       this.setState({
//         logInIsShown: true,
//         logInButtonShown: false,
//         signUpButtonShown: false,
//       })
//     }
//     render() {
//       return (
//         <Container>
//           {this.logInButtonShown ? <Button style={styles.button}><Text>Log In</Text></Button> : null}
//           {/* {this.signUpButtonShown ? <Button onPress={this.showLogin}><Text>Sign Up</Text></Button> : null} */}
//           {/* {this.logInIsShown ? <LoginForm /> : null} */}
//           {/* {this.signUpIsShown ? <SignUp /> : null} */}
//           <Logo />
//         </Container>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   button: {
//     height: 100
//   },
//   image: {
//     width: 100,
//     height: 50,
//     position: "absolute",
//     bottom: 8,
//     right: 8,
//   },
// })