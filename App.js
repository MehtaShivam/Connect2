import React, { Component, PureComponent } from 'react';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { TouchableOpacity, View, Text, Button, TextInput, Image, ScrollView, StyleSheet, FlatList } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Table, TableWrapper, Row, Rows} from 'react-native-table-component';
import QRCode from 'react-native-qrcode-generator';
import Toolbar from './toolbar.component';
import Gallery from './gallery.component';
import TextTicker from 'react-native-text-ticker';
import styles_two from './styles.js';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontSize: 40, backgroundColor: '#ADD8e6'}}>Connect</Text>
                <TextInput defaultValue='phone number'/>
                <TextInput defaultValue='password'/>
                <Button
                    title="Submit"
                    onPress={()=> this.props.navigation.navigate('ProfilePage')}
                />
                  <Button
                    title="Forgot Password?"
                    onPress={()=> this.props.navigation.navigate('ForgotPassword')}
                />
                <Button
                    title="Sign Up"
                    onPress={() => this.props.navigation.navigate('SignUp')}
                />
            </View>
        );
    }
}

// class ProfilePageScreen extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//                 <Image style={{width: 150, height: 200, resizeMode: 'stretch'}} source={require('./SuperSaiyanShiv.png')} />
//                 <ScrollView>
//                   <Table>
//                   {
//                     <Row>
//                       key={"Instagram"}
//                       data={"lil_shiva"}
//                     </Row>
//                   }
//                   </Table>
//                 </ScrollView>
//             </View>
//     );
//     }
// }

class ProfilePageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Account'],
      widthArr: [40, 60]
    }
  }

  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 9; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }

    return (
      <View style={styles.container}>
        <Image style={{width: 100, height: 200}} source={require('./SuperSaiyanShiv.png')} />
        <Button
            title="Settings"
            onPress={()=> alert('You are in the Settings!')}
        />
        <Button
            title="Contacts"
            onPress={()=> this.props.navigation.navigate('Contacts')}
        />
        <Button
        title="Capture"
        onPress={()=> this.props.navigation.navigate('CameraPage')}
        />
        <Button
          title="Share"
          onPress={()=> this.props.navigation.navigate('QRCode')}
          />
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
        <View style={{flex: 1}}>
  <View><Text>my text</Text></View>
  <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
  <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
  <Image source={require('./c.png')} style={{width: 50, height: 50}}/>

  </TouchableOpacity>
  </View>
  </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});

class ContactsScreen extends React.PureComponent {

  render(){
    return (
   <View style={styles_three.container}>
     <FlatList
       data={[
         {key: 'Devin'},
         {key: 'Dan'},
         {key: 'Dominic'},
         {key: 'Jackson'},
         {key: 'James'},
         {key: 'Joel'},
         {key: 'John'},
         {key: 'Jillian'},
         {key: 'Jimmy'},
         {key: 'Julie'},
       ]}
       renderItem={({item}) => <Text style={styles_three.item}>{item.key}</Text>}
     />
     <View style={{flex: 1}}>
<View><Text>Last page</Text></View>
<View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
<TouchableOpacity onPress={() => this.props.navigation.navigate('ProfilePage')}>
<Image source={require('./c.png')} style={{width: 50, height: 50}}/>

</TouchableOpacity>
</View>
</View>
   </View>
 );
   }
 }
 const styles_three = StyleSheet.create({
   container: {
    flex: 1,
    paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
 });

 const styles_one = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
 });

class CameraPageScreen extends React.Component {
  camera = null;

      state = {
          captures: [],
          capturing: null,
          hasCameraPermission: null,
          cameraType: Camera.Constants.Type.back,
          flashMode: Camera.Constants.FlashMode.off,
      };

      setFlashMode = (flashMode) => this.setState({ flashMode });
      setCameraType = (cameraType) => this.setState({ cameraType });
      handleCaptureIn = () => this.setState({ capturing: true });

      handleCaptureOut = () => {
          if (this.state.capturing)
              this.camera.stopRecording();
      };

      handleShortCapture = async () => {
          const photoData = await this.camera.takePictureAsync();
          this.setState({ capturing: false, captures: [photoData, ...this.state.captures] })
      };

      handleLongCapture = async () => {
          const videoData = await this.camera.recordAsync();
          this.setState({ capturing: false, captures: [videoData, ...this.state.captures] });
      };

      async componentDidMount() {
          const camera = await Permissions.askAsync(Permissions.CAMERA);
          const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
          const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

          this.setState({ hasCameraPermission });
      };

      render() {
          const { hasCameraPermission, flashMode, cameraType, capturing, captures } = this.state;

          if (hasCameraPermission === null) {
              return <View />;
          } else if (hasCameraPermission === false) {
              return <Text>Access to camera has been denied.</Text>;
          }

          return (
              <React.Fragment>
                  <View>
                      <Camera
                          type={cameraType}
                          flashMode={flashMode}
                          style={styles_two.preview}
                          ref={camera => this.camera = camera}
                      />
                  </View>

                  {captures.length > 0 && <Gallery captures={captures}/>}

                  <Toolbar
                      capturing={capturing}
                      flashMode={flashMode}
                      cameraType={cameraType}
                      setFlashMode={this.setFlashMode}
                      setCameraType={this.setCameraType}
                      onCaptureIn={this.handleCaptureIn}
                      onCaptureOut={this.handleCaptureOut}
                      onLongCapture={this.handleLongCapture}
                      onShortCapture={this.handleShortCapture}
                  />
              </React.Fragment>
          );
      };
  };

class QRCodeScreen extends React.Component {
  state = {
    text: 'http://facebook.github.io/react-native/',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
        />
        <QRCode
          value={this.state.text}
          size={200}
          bgColor='black'
          fgColor='white'/>
          <View style={{flex: 1}}>
    <View><Text>my text</Text></View>
    <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
    <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfilePage')}>
    <Image source={require('./c.png')} style={{width: 50, height: 50}}/>

    </TouchableOpacity>
    </View>
    </View>
      </View>
    );
  };
}

class ForgotPasswordScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>An email has with a temporary password has been sent.</Text>
                <View style={{flex: 1}}>
          <View><Text>my text</Text></View>
          <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Image source={require('./c.png')} style={{width: 50, height: 50}}/>

          </TouchableOpacity>
          </View>
          </View>
            </View>
    );
    }
}

class SignUpScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <TextInput defaultValue='Email'/>
                <TextInput defaultValue='Username'/>
                <TextInput defaultValue='Password'/>
                <TextInput defaultValue='Phone Number'/>
                <Button
                    title="Submit"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <View style={{flex: 1}}>
          <View><Text>my text</Text></View>
          <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Image source={require('./c.png')} style={{width: 50, height: 50}}/>

          </TouchableOpacity>
          </View>
          </View>
            </View>
    );
    }
}



const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        SignUp: SignUpScreen,
        ForgotPassword: ForgotPasswordScreen,
        ProfilePage: ProfilePageScreen,
        QRCode: QRCodeScreen,
        CameraPage: CameraPageScreen,
        Contacts: ContactsScreen
    },
    {
        initialRouteName: "Home"
    }
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
