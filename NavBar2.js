import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerButton } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import ContactsPage from './ContactsScreen';
import ProfilePage from './ProfilePageScreen';
import CapturePage from './CaptureScreen';
import SharePage from './ShareScreen';
import SignOut from './SignOut';
import Header from './Header';
import * as firebase from 'firebase';

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <Tab.Navigator
    initialRouteName="Profile"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
     let iconName;
     if (route.name === 'Contacts') {
        iconName = focused
        ? 'ios-person'
        : 'ios-person-outline';
      } else if (route.name === 'Profile') {
        iconName = focused
        ? 'ios-albums'
        : 'ios-albums-outline';
      } else if (route.name === 'Capture') {
        iconName = focused
        ? 'ios-camera'
        : 'ios-camera-outline';
      } else if (route.name === 'Share') {
        iconName = focused
        ? 'ios-share'
        : 'ios-share-outline';
      }
return <Ionicons name={iconName} size={size} color={color}     />;
        },
      })}
      tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      }}
    >
        <Tab.Screen name="Contacts" component={ContactsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Capture" component={CaptureScreen} />
        <Tab.Screen name="Share" component={ShareScreen} />
    </Tab.Navigator>
  );
}
function LogOffScreen({ navigation }) {
  firebase.auth().signOut().then(() => {
   // Sign-out successful.
   navigation.navigate('Home')
 }).catch((error) => {
   // An error happened.
 });
 return(
   null
 )
}
const Stack = createStackNavigator();

function ProfileScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileDetailsScreen} options={({ navigation }) => ({
        headerLeft: () => <Header navigation={navigation} title="Profile"/>})}/>
    </Stack.Navigator>
  );
}
function ProfileDetailsScreen({navigation}) {
  return (
    <ProfilePage/>
  );
}

function ContactsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contacts" component={ContactDetailsScreen} options={({ navigation }) => ({
        headerLeft: () => <Header navigation={navigation} title="Contacts"/>})}/>
    </Stack.Navigator>
  );
}

function ContactDetailsScreen({navigation}) {
  return (
    <ContactsPage/>
  );
}


function CaptureScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Capture" component={CaptureDetailsScreen} options={({ navigation }) => ({
        headerLeft: () => <Header navigation={navigation} title="Capture"/>})}/>
    </Stack.Navigator>
  );
}

function CaptureDetailsScreen({navigation}) {
  return (
    <CapturePage/>
  );
}


function ShareScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Share" component={ShareDetailsScreen} options={({ navigation }) => ({
        headerLeft: () => <Header navigation={navigation} title="Share"/>})}/>
    </Stack.Navigator>
  );
}

function ShareDetailsScreen({navigation}) {
  return (
    <SharePage/>
  );
}


const Drawer = createDrawerNavigator();
export default function NavAndDrawer() {
  return (
      <Drawer.Navigator initialRouteName="Settings">
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Log Off" component={LogOffScreen} />
      </Drawer.Navigator>
  )
}
