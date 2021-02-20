//v1

// import React, {Component, PureComponent} from 'react';
// import { Camera } from 'expo-camera';
// import * as Permissions from 'expo-permissions';

// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { Table, TableWrapper, Row, Rows} from 'react-native-table-component';
// import QRCode from 'react-native-qrcode-generator';
// import Toolbar from './toolbar.component';
// import Gallery from './gallery.component';
// import TextTicker from 'react-native-text-ticker';
// import styles_two from './styles.js';
// import { NavigationContainer } from '@react-navigation/native';
// import PropTypes from 'prop-types';
// import { Link, Switch, Route } from 'react-router';
// import 'react-native-gesture-handler';

// class HomeScreen extends React.Component {
//   state = {
//    email: '',
//    password: ''
// }
// handleEmail = (text) => {
//    this.setState({ email: text })
// }
// handlePassword = (text) => {
//    this.setState({ password: text })
// }
// login = () => {
//    this.props.navigation.navigate('ProfilePage')
// }
// forgotPassword =()=>{
//   this.props.navigation.navigate('ForgotPassword')
// }
// signUp =()=>{
//   this.props.navigation.navigate('SignUp')
// }
//     render() {
//         return (
//             // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             //     <Text style={{fontSize: 40, backgroundColor: '#ADD8e6'}}>Connect</Text>
//             //     <TextInput defaultValue='phone number'/>
//             //     <TextInput defaultValue='password'/>
//             //     <Button
//             //         title="Submit"
//             //         onPress={()=> this.props.navigation.navigate('ProfilePage')}
//             //     />
//             //       <Button
//             //         title="Forgot Password?"
//             //         onPress={()=> this.props.navigation.navigate('ForgotPassword')}
//             //     />
//             //     <Button
//             //         title="Sign Up"
//             //         onPress={() => this.props.navigation.navigate('SignUp')}
//             //     />
//             // </View>
//             <View style = {styles_four.container}>
//             <Text style={{fontSize: 40, alignItems: 'center', justifyContent:'center'}}>Connect</Text>
//             <TextInput style = {styles_four.input}
//                underlineColorAndroid = "transparent"
//                placeholder = "Email"
//                placeholderTextColor = "#ADD8e6"
//                autoCapitalize = "none"
//                onChangeText = {this.handleEmail}/>
//
//             <TextInput style = {styles_four.input}
//                underlineColorAndroid = "transparent"
//                placeholder = "Password"
//                placeholderTextColor = "#ADD8e6"
//                autoCapitalize = "none"
//                onChangeText = {this.handlePassword}/>
//
//             <TouchableOpacity
//                style = {styles_four.submitButton}
//                onPress = {
//                   () => this.login(this.state.email, this.state.password)
//                }>
//                <Text style = {styles_four.submitButtonText}> Submit </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//                style = {styles_four.submitButton}
//                onPress = {
//                   () => this.forgotPassword()
//                }>
//                <Text style = {styles_four.submitButtonText}> Forgot Password? </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//                style = {styles_four.submitButton}
//                onPress = {
//                   () => this.signUp()
//                }>
//                <Text style = {styles_four.submitButtonText}> Sign Up </Text>
//             </TouchableOpacity>
//          </View>
//         );
//     }
// }
// const styles_four = StyleSheet.create({
//    container: {
//       paddingTop: 23
//    },
//    input: {
//       margin: 15,
//       height: 40,
//       borderColor: '#ADD8e6',
//       borderWidth: 1
//    },
//    submitButton: {
//       backgroundColor: '#ADD8e6',
//       padding: 10,
//       margin: 15,
//       height: 40,
//    },
//    submitButtonText:{
//       color: 'white',
//       fontSize: 20
//    }
// })
// // class ProfilePageScreen extends React.Component {
// //     render() {
// //         return (
// //             <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
// //                 <Image style={{width: 150, height: 200, resizeMode: 'stretch'}} source={require('./SuperSaiyanShiv.png')} />
// //                 <ScrollView>
// //                   <Table>
// //                   {
// //                     <Row>
// //                       key={"Instagram"}
// //                       data={"lil_shiva"}
// //                     </Row>
// //                   }
// //                   </Table>
// //                 </ScrollView>
// //             </View>
// //     );
// //     }
// // }
//
//
// class ProfilePageScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tableHead: ['Account'],
//       widthArr: [40, 60]
//     }
//   }
//
//   render() {
//     const state = this.state;
//     const tableData = [];
//     for (let i = 0; i < 30; i += 1) {
//       const rowData = [];
//       for (let j = 0; j < 9; j += 1) {
//         rowData.push(`${i}${j}`);
//       }
//       tableData.push(rowData);
//     }
//
//     return (
//       <View style={styles.container}>
//         <Image style={{width: 200, height: 200, borderRadius: 200/2}} source={require('./SuperSaiyanShiv.png')} />
//         <Button
//             title="Settings"
//             onPress={()=> alert('You are in the Settings!')}
//         />
//         <Button
//             title="Contacts"
//             onPress={()=> this.props.navigation.navigate('Contacts')}
//         />
//         <Button
//         title="Capture"
//         onPress={()=> this.props.navigation.navigate('CameraPage')}
//         />
//         <Button
//           title="Share"
//           onPress={()=> this.props.navigation.navigate('QRCode')}
//           />
//         <ScrollView horizontal={true}>
//           <View>
//             <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
//               <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
//             </Table>
//             <ScrollView style={styles.dataWrapper}>
//               <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
//                 {
//                   tableData.map((rowData, index) => (
//                     <Row
//                       key={index}
//                       data={rowData}
//                       widthArr={state.widthArr}
//                       style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
//                       textStyle={styles.text}
//                     />
//                   ))
//                 }
//               </Table>
//             </ScrollView>
//           </View>
//         </ScrollView>
//
//   <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
//   <TouchableOpacity
//      style = {styles_four.submitButton}
//      onPress = {
//         () => this.props.navigation.navigate('ProfilePage')
//      }>
//      <Text style = {styles_four.submitButtonText}>Profile Page</Text>
//   </TouchableOpacity>
//   <TouchableOpacity
//      style = {styles_four.submitButton}
//      onPress = {
//         () => this.props.navigation.navigate('Contacts')
//      }>
//      <Text style = {styles_four.submitButtonText}>Contact</Text>
//   </TouchableOpacity>
//   <TouchableOpacity
//      style = {styles_four.submitButton}
//      onPress = {
//         () => this.props.navigation.navigate('Settings')
//      }>
//      <Text style = {styles_four.submitButtonText}>Settings</Text>
//   </TouchableOpacity>
//   <TouchableOpacity
//      style = {styles_four.submitButton}
//      onPress = {
//         () => this.props.navigation.navigate('CameraPage')
//      }>
//      <Text style = {styles_four.submitButtonText}>Capture</Text>
//   </TouchableOpacity>
//   <TouchableOpacity
//      style = {styles_four.submitButton}
//      onPress = {
//         () => this.props.navigation.navigate('QRCode')
//      }>
//      <Text style = {styles_four.submitButtonText}>Share</Text>
//   </TouchableOpacity>
//   </View>
//   </View>
//
//
// );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
//   header: { height: 50, backgroundColor: '#537791' },
//   text: { textAlign: 'center', fontWeight: '100' },
//   dataWrapper: { marginTop: -1 },
//   row: { height: 40, backgroundColor: '#E7E6E1' }
// });
//
// class ContactsScreen extends React.PureComponent {
//
//   render(){
//     return (
//    <View style={styles_three.container}>
//      <FlatList
//        data={[
//          {key: 'Devin'},
//          {key: 'Dan'},
//          {key: 'Dominic'},
//          {key: 'Jackson'},
//          {key: 'James'},
//          {key: 'Joel'},
//          {key: 'John'},
//          {key: 'Jillian'},
//          {key: 'Jimmy'},
//          {key: 'Julie'},
//        ]}
//        renderItem={({item}) => <Text style={styles_three.item}>{item.key}</Text>}
//      />
//      <View style={{flex: 1}}>
// <View><Text>Last page</Text></View>
// <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
// <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfilePage')}>
// <Image source={require('./c.png')} style={{width: 50, height: 50}}/>
//
// </TouchableOpacity>
// </View>
// </View>
//    </View>
//  );
//    }
//  }
//  const styles_three = StyleSheet.create({
//    container: {
//     flex: 1,
//     paddingTop: 22
//    },
//    item: {
//      padding: 10,
//      fontSize: 18,
//      height: 44,
//    },
//  });
//
//  const styles_one = StyleSheet.create({
//    container: {
//      flex: 1,
//      justifyContent: 'center',
//      alignItems: 'center',
//    },
//  });
//
// class CameraPageScreen extends React.Component {
//   camera = null;
//
//       state = {
//           captures: [],
//           capturing: null,
//           hasCameraPermission: null,
//           cameraType: Camera.Constants.Type.back,
//           flashMode: Camera.Constants.FlashMode.off,
//       };
//
//       setFlashMode = (flashMode) => this.setState({ flashMode });
//       setCameraType = (cameraType) => this.setState({ cameraType });
//       handleCaptureIn = () => this.setState({ capturing: true });
//
//       handleCaptureOut = () => {
//           if (this.state.capturing)
//               this.camera.stopRecording();
//       };
//
//       handleShortCapture = async () => {
//           const photoData = await this.camera.takePictureAsync();
//           this.setState({ capturing: false, captures: [photoData, ...this.state.captures] })
//       };
//
//       handleLongCapture = async () => {
//           const videoData = await this.camera.recordAsync();
//           this.setState({ capturing: false, captures: [videoData, ...this.state.captures] });
//       };
//
//       async componentDidMount() {
//           const camera = await Permissions.askAsync(Permissions.CAMERA);
//           const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
//           const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');
//
//           this.setState({ hasCameraPermission });
//       };
//
//       render() {
//           const { hasCameraPermission, flashMode, cameraType, capturing, captures } = this.state;
//
//           if (hasCameraPermission === null) {
//               return <View />;
//           } else if (hasCameraPermission === false) {
//               return <Text>Access to camera has been denied.</Text>;
//           }
//
//           return (
//               <React.Fragment>
//                   <View>
//                       <Camera
//                           type={cameraType}
//                           flashMode={flashMode}
//                           style={styles_two.preview}
//                           ref={camera => this.camera = camera}
//                       />
//                   </View>
//
//                   {captures.length > 0 && <Gallery captures={captures}/>}
//
//                   <Toolbar
//                       capturing={capturing}
//                       flashMode={flashMode}
//                       cameraType={cameraType}
//                       setFlashMode={this.setFlashMode}
//                       setCameraType={this.setCameraType}
//                       onCaptureIn={this.handleCaptureIn}
//                       onCaptureOut={this.handleCaptureOut}
//                       onLongCapture={this.handleLongCapture}
//                       onShortCapture={this.handleShortCapture}
//                   />
//               </React.Fragment>
//           );
//       };
//   };
//
// class QRCodeScreen extends React.Component {
//   state = {
//     text: 'http://facebook.github.io/react-native/',
//   };
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput
//           style={styles.input}
//           onChangeText={(text) => this.setState({text: text})}
//           value={this.state.text}
//         />
//         <QRCode
//           value={this.state.text}
//           size={200}
//           bgColor='black'
//           fgColor='white'/>
//           <View style={{flex: 1}}>
//     <View><Text>my text</Text></View>
//     <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
//     <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfilePage')}>
//     <Image source={require('./c.png')} style={{width: 50, height: 50}}/>
//
//     </TouchableOpacity>
//     </View>
//     </View>
//       </View>
//     );
//   };
// }
//
// class ForgotPasswordScreen extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//                 <Text>An email has with a temporary password has been sent.</Text>
//                 <View style={{flex: 1}}>
//           <View><Text>my text</Text></View>
//           <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
//           <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
//           <Image source={require('./c.png')} style={{width: 50, height: 50}}/>
//
//           </TouchableOpacity>
//           </View>
//           </View>
//             </View>
//     );
//     }
// }
//
// class SignUpScreen extends React.Component {
// state = {
//    email: '',
//    password: '',
//    confirmPassword: '',
//    username: '',
//    phoneNumber: ''
// }
// handleEmail = (text) => {
//    this.setState({ email: text })
// }
// handlePassword = (text) => {
//    this.setState({ password: text })
// }
// handleConfirmPassword = (text) => {
//   this.setState({ confirmPassword: text})
// }
// handleUsername = (text) => {
//   this.setState({ username: text})
// }
// handlePhoneNumber = (text) => {
//   this.setState({ phoneNumber: text})
// }
// submit = () => {
//    this.props.navigation.navigate('Home')
// }
//     render() {
//         return (
//             // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             //     <Text style={{fontSize: 40, backgroundColor: '#ADD8e6'}}>Connect</Text>
//             //     <TextInput defaultValue='phone number'/>
//             //     <TextInput defaultValue='password'/>
//             //     <Button
//             //         title="Submit"
//             //         onPress={()=> this.props.navigation.navigate('ProfilePage')}
//             //     />
//             //       <Button
//             //         title="Forgot Password?"
//             //         onPress={()=> this.props.navigation.navigate('ForgotPassword')}
//             //     />
//             //     <Button
//             //         title="Sign Up"
//             //         onPress={() => this.props.navigation.navigate('SignUp')}
//             //     />
//             // </View>
//             <View style = {styles_four.container}>
//             <Text style={{fontSize: 40, alignItems: 'center', justifyContent:'center'}}>Sign Up</Text>
//             <TextInput style = {styles_four.input}
//                underlineColorAndroid = "transparent"
//                placeholder = "Email"
//                placeholderTextColor = "#ADD8e6"
//                autoCapitalize = "none"
//                onChangeText = {this.handleEmail}/>
//
//             <TextInput style = {styles_four.input}
//                underlineColorAndroid = "transparent"
//                placeholder = "Password"
//                placeholderTextColor = "#ADD8e6"
//                autoCapitalize = "none"
//                onChangeText = {this.handlePassword}/>
//
//            <TextInput style = {styles_four.input}
//               underlineColorAndroid = "transparent"
//               placeholder = "Confirm Password"
//               placeholderTextColor = "#ADD8e6"
//               autoCapitalize = "none"
//               onChangeText = {this.handleConfirmPassword}/>
//
//           <TextInput style = {styles_four.input}
//              underlineColorAndroid = "transparent"
//              placeholder = "Username"
//              placeholderTextColor = "#ADD8e6"
//              autoCapitalize = "none"
//              onChangeText = {this.handleUsername}/>
//          <TextInput style = {styles_four.input}
//             underlineColorAndroid = "transparent"
//             placeholder = "Phone Number"
//             placeholderTextColor = "#ADD8e6"
//             autoCapitalize = "none"
//             onChangeText = {this.handlePhoneNumber}/>
//            <TouchableOpacity
//                   style = {styles_four.submitButton}
//                   onPress = {
//                      () => this.submit()
//                   }>
//                   <Text style = {styles_four.submitButtonText}> Submit </Text>
//                </TouchableOpacity>
//
//          </View>
//         );
//     }
// }
//
//
//
// const AppNavigator = createStackNavigator(
//     {
//         Home: HomeScreen,
//         SignUp: SignUpScreen,
//         ForgotPassword: ForgotPasswordScreen,
//         ProfilePage: ProfilePageScreen,
//         QRCode: QRCodeScreen,
//         CameraPage: CameraPageScreen,
//         Contacts: ContactsScreen
//     },
//     {
//         initialRouteName: "Home"
//     }
// );
//
// const AppContainer = createAppContainer(AppNavigator);
// export default class App extends React.Component {
//     render() {
//         return <AppContainer />;
//     }
// }

//v2
// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { TouchableOpacity, View, Text, Button, TextInput, Image, ScrollView, StyleSheet, FlatList } from 'react-native';
// import * as firebase from 'firebase';
// import Home from './HomeScreen';
//
// const Stack = createStackNavigator();
//
// const styles_four = StyleSheet.create({
//    container: {
//       paddingTop: 23
//    },
//    input: {
//       margin: 15,
//       height: 40,
//       borderColor: '#ADD8e6',
//       borderWidth: 1
//    },
//    submitButton: {
//       backgroundColor: '#ADD8e6',
//       padding: 10,
//       margin: 15,
//       height: 40,
//    },
//    submitButtonText:{
//       color: 'white',
//       fontSize: 20
//    }
// })
//
//
// const HomeScreen = ({ navigation }) => {
//   return (
//     <React.Fragment>
//      <Text style={{fontSize: 40, backgroundColor: '#ADD8e6', textAlign: 'center'}}>Connect</Text>
//      <TextInput style = {styles_four.input}
//       placeholder = "Email"
//       placeholderTextColor = "#ADD8e6"
//       />
//
//    <TextInput style = {styles_four.input}
//       underlineColorAndroid = "transparent"
//       placeholder = "Password"
//       placeholderTextColor = "#ADD8e6"
//     />
//
//    <TouchableOpacity
//       style = {styles_four.submitButton}
//       onPress = {
//          () => navigation.navigate('Profile', { name: 'Jane' })
//       }>
//       <Text style = {styles_four.submitButtonText}> Submit </Text>
//    </TouchableOpacity>
//    <TouchableOpacity
//       style = {styles_four.submitButton}
//       onPress = {
//          () => navigation.navigate('Forgot Password')
//       }>
//       <Text style = {styles_four.submitButtonText}> Forgot Password? </Text>
//    </TouchableOpacity>
//    <TouchableOpacity
//       style = {styles_four.submitButton}
//       onPress = {
//          () => navigation.navigate('Sign Up')
//       }>
//       <Text style = {styles_four.submitButtonText}> Sign Up </Text>
//    </TouchableOpacity>
//    </React.Fragment>
//   );
// };
//
// const ProfileScreen = ({ navigation, route }) => {
//   return (
//     <View style={{justifyContent: 'center'}}>
//     <Text style={{fontSize: 20, backgroundColor: '#ADD8e6', textAlign: 'center', color: 'white'}}>Shivam Mehta</Text>
//     <Image style={{width: 200, height: 200, borderRadius: 200/2, alignSelf: 'center'}} source={require('./SuperSaiyanShiv.png')}/>
//     <TouchableOpacity style = {styles_four.submitButton}
//     onPress = {
//           () => navigation.navigate('Contacts')
//        }>
//        <Text style = {styles_four.submitButtonText}> Contacts </Text>
//
//     </TouchableOpacity>
//     <TouchableOpacity style = {styles_four.submitButton}
//     onPress = {
//           () => navigation.navigate('Capture')
//        }>
//        <Text style = {styles_four.submitButtonText}> Capture </Text>
//
//     </TouchableOpacity>
//     <TouchableOpacity style = {styles_four.submitButton}
//     onPress = {
//           () => navigation.navigate('Share')
//        }>
//        <Text style = {styles_four.submitButtonText}> Share </Text>
//
//     </TouchableOpacity>
//     </View>
//   );
// };
//
// const ForgotPasswordScreen = ({ navigation, route }) => {
//   return (
//     <TouchableOpacity style = {styles_four.submitButton}
//     onPress = {
//           () => navigation.navigate('Home')
//        }>
//        <Text style = {styles_four.submitButtonText}> An email with a temporary password has been sent. </Text>
//     </TouchableOpacity>
//   );
// };
//
// const SignUpScreen = ({ navigation, route }) => {
//   return (
//     <React.Fragment>
//     <TextInput style = {styles_four.input}
//      placeholder = "Phone Number"
//      placeholderTextColor = "#ADD8e6"
//      autoCapitalize = "none"
//      />
//     <TextInput style = {styles_four.input}
//      placeholder = "Email"
//      placeholderTextColor = "#ADD8e6"
//      autoCapitalize = "none"
//      />
//    <TextInput style = {styles_four.input}
//     placeholder = "Username"
//     placeholderTextColor = "#ADD8e6"
//     autoCapitalize = "none"
//     />
//   <TextInput style = {styles_four.input}
//    placeholder = "Password"
//    placeholderTextColor = "#ADD8e6"
//    autoCapitalize = "none"
//    />
//    <TextInput style = {styles_four.input}
//     placeholder = "Confirm Password"
//     placeholderTextColor = "#ADD8e6"
//     autoCapitalize = "none"
//     />
//     <TouchableOpacity style = {styles_four.submitButton}
//     onPress = {
//           () => navigation.navigate('Home')
//        }>
//        <Text style = {styles_four.submitButtonText}> Submit </Text>
//     </TouchableOpacity>
//     </React.Fragment>
//   );
// };
// const ContactsScreen = ({ navigation, route }) => {
//   return (
//     <React.Fragment>
//     <Text>This is the contacts screen</Text>
//     </React.Fragment>
//   );
// };
// const CaptureScreen = ({ navigation, route }) => {
//   return (
//     <React.Fragment>
//     <Text>This is the capture screen</Text>
//     </React.Fragment>
//   );
// };
// const ShareScreen = ({ navigation, route }) => {
//   return (
//     <React.Fragment>
//     <Text>This is the share screen</Text>
//     </React.Fragment>
//   );
// };
// const AppContainer = createAppContainer(AppNavigator);
// const App = () => {
//   return (
//     <NavigationContainer>
//     <Stack.Navigator>
//     <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ title: 'Welcome' }}
//       />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//       <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
//       <Stack.Screen name="Sign Up" component={SignUpScreen} />
//       <Stack.Screen name="Contacts" component={ContactsScreen}/>
//       <Stack.Screen name="Capture" component={CaptureScreen}/>
//       <Stack.Screen name="Share" component={ShareScreen}/>
//     </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
//
// export default App;

//v3
// import React from 'react';
//  import { Link, Switch, Route } from 'react-router';
//  //import Nav from './nav';
//  import ProfilePage from './PofilePageScreen';
//  import ForgotPassword from './ForgotPasswordScreen';
//  import SignUp from './SignUpScreen';
//
//  const NavRoute = ({exact, path, component: Component}) => (
//    <Route exact={exact} path={path} render={(props) => (
//      <div>
//        <Header/>
//        <Component {...props}/>
//      </div>
//    )}/>
//  )
//
//  export default class App extends React.Component {
//    render() {
//      return (
//        <div className="App">
//          <Router>
//              <Switch>
//                <NavRoute exactly component={Landing} pattern="/" />
//                <Route exactly component={ProfilePage} pattern="/login" />
//                <NavRoute exactly component={ForgotPassword} pattern="/path1" />
//                <NavRoute exactly component={SignUp} pattern="/path2" />
//                <NavRoute component={Page404} />
//              </Switch>
//          </Router>
//        </div>
//      );
//    }
//  }

//v5

import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Alert, Button } from 'react-native'
import * as firebase from 'firebase'
import Home from './HomeScreen'
import ForgotPassword from './ForgotPasswordScreen'
import Share from './ShareScreen'
import SignUp from './SignUpScreen'
import AddProfile from './AddProfileScreen'
import ApiKeys from './ApiKeys'
import NavAndDrawer from './NavBar2'

const Stack = createStackNavigator()

export default class App extends React.Component {
  constructor(props) {
    super(props)
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.firebaseConfig)
    }
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={ Home }
            options={ { headerShown: false } }
          />

          <Stack.Screen name="NavBar" component={ NavAndDrawer } options={ {
            headerShown: false
          } }/>
          <Stack.Screen name="AddProfile" component={ AddProfile } options={ {
            headerShown: false
          } }/>
          <Stack.Screen name="Share" component={ Share } options={ {
            headerShown: false
          } }/>
          <Stack.Screen name="Forgot Password" component={ ForgotPassword } options={ {
            headerLeft: () => (
              <Button
                title='Back'
                color="#ADD8e6"
                onPress={ () => Alert.alert('Add functionality') }
              />
            )
          } }/>
          <Stack.Screen name="Sign Up" component={ SignUp } options={ {
            headerLeft: () => (
              <Button
                onPress={ () => Alert.alert('Add functionality') }
                title="Back"
                color="#ADD8e6"
              />
            )
          } }/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
