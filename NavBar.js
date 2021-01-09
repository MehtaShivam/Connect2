//v13
import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HamburgerNav from './HamburgerMenu'

function ContactsScreen({ navigation }) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      // Prevent default behavior
      navigation.navigate('Contacts')
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1}}>
    <HamburgerNav name='Contacts'/>
    </SafeAreaView>
  );
}

function ProfileScreen({ navigation }) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      // Prevent default behavior
      navigation.navigate('Profile')
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1}}>
    <HamburgerNav name='Profile'/>
    </SafeAreaView>
  );
}

function CaptureScreen({ navigation }) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      // Prevent default behavior
      navigation.navigate('Capture')
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1}}>
    <HamburgerNav name='Capture'/>
    </SafeAreaView>
  );
}

function ShareScreen({ navigation }) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      // Prevent default behavior
      navigation.navigate('Share')
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1}}>
    <HamburgerNav name='Share'/>
    </SafeAreaView>
  );
}


const Tab = createMaterialBottomTabNavigator();

export default function NavBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Contacts') {
              iconName = focused
                ? 'person'
                : 'person-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'home' : 'home-outline';
            }else if (route.name === 'Capture') {
              iconName = focused ? 'camera' : 'camera-outline';
            }else if (route.name === 'Share') {
              iconName = focused ? 'share' : 'share-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={20} color={color} />
          },
        })}
        // tabBarOptions={{
        //   activeTintColor: 'tomato',
        //   inactiveTintColor: 'gray',
        // }}
        barStyle={{ backgroundColor: '#ADD8e6' }}
        >
        <Tab.Screen name="Contacts" component={ContactsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Capture" component={CaptureScreen} />
        <Tab.Screen name="Share" component={ShareScreen} />
      </Tab.Navigator>
  );
}

//v1

// import React from 'react'
// import { View, StyleSheet, Image } from 'react-native'
// import BottomNavigation, {
//   IconTab,
//   Badge
// } from 'react-native-material-bottom-navigation'
// import Icon from '@expo/vector-icons/MaterialCommunityIcons'
// import Profile from './ProfilePageScreen';
// import Contacts from './ContactsScreen';
//
// export default class App extends React.Component {
//   state = {
//     activeTab: 'games'
//   }
//
//   tabs = [
//     {
//       key: 'contacts',
//       label: 'Contacts',
//       screen: Contacts,
//       barColor: '#ADD8e6',
//       pressColor: 'rgba(255, 255, 255, 0.16)',
//       icon: 'contacts'
//     },
//     {
//       key: 'capture',
//       label: 'Capture',
//       barColor: '#ADD8e6',
//       pressColor: 'rgba(255, 255, 255, 0.16)',
//       icon: 'camera'
//     },
//     {
//       key: 'profile',
//       label: 'Profile',
//       screen: Profile,
//       barColor: '#ADD8e6',
//       pressColor: 'rgba(255, 255, 255, 0.16)',
//       icon: 'home'
//     },
//
//     {
//       key: 'share',
//       label: 'Share',
//       barColor: '#ADD8e6',
//       pressColor: 'rgba(255, 255, 255, 0.16)',
//       icon: 'share'
//     },
//     {
//       key: 'settings',
//       label: 'Settings',
//       barColor: '#ADD8e6',
//       pressColor: 'rgba(255, 255, 255, 0.16)',
//       icon: 'hamburger'
//     }
//   ]
//
//   state = {
//     activeTab: this.tabs[0].key
//   }
//
//   renderIcon = icon => ({ isActive }) => (
//     <Icon size={24} color="white" name={icon} />
//   )
//
//   renderTab = ({ tab, isActive }) => (
//     <IconTab
//       isActive={isActive}
//       key={tab.key}
//       label={tab.label}
//       renderIcon={this.renderIcon(tab.icon)}
//     />
//   )
//
//   render() {
//     return (
//       <View style={{ flex: 1, backgroundColor: 'white' }}>
//         <View style={{ flex: 1, justifyContent: 'flex-end' }}>
//         <BottomNavigation
//           tabs={this.tabs}
//           activeTab={this.state.activeTab}
//           onTabPress={() => }
//           renderTab={this.renderTab}
//           useLayoutAnimation
//         />
//         </View>
//       </View>
//     )
//   }
// }
//v2
// import * as React from 'react';
// import { BottomNavigation, Text } from 'react-native-paper';
//
// const MusicRoute = () => <Text>Music</Text>;
//
// const AlbumsRoute = () => <Text>Albums</Text>;
//
// const RecentsRoute = () => <Text>Recents</Text>;
//
// export default class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       index: 0,
//     };
//   }
//   routes =
//     [
//       { key: 'music', title: 'Music', icon: 'queue-music' },
//       { key: 'albums', title: 'Albums', icon: 'album' },
//       { key: 'recents', title: 'Recents', icon: 'history' },
//     ]
//
//
//   renderScene = BottomNavigation.SceneMap({
//     music: MusicRoute,
//     albums: AlbumsRoute,
//     recents: RecentsRoute,
//   });
//
//   let yes = state;
//   render(){
//   return (
//     <BottomNavigation
//       navigationState={{ yes.index, routes }}
//       onIndexChange={setIndex}
//       renderScene={renderScene}
//     />
//   );
// };
// }

//v4
// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
//
// function Feed() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed!</Text>
//     </View>
//   );
// }
//
// function Profile() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Profile!</Text>
//     </View>
//   );
// }
//
// function Notifications() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications!</Text>
//     </View>
//   );
// }
//
// const Tab = createBottomTabNavigator();
//
// function MyTabs() {
//   return (
//
//     <Tab.Navigator
//       initialRouteName="Feed"
//       tabBarOptions={{
//         activeTintColor: '#e91e63',
//       }}
//     >
//       <Tab.Screen
//         name="Feed"
//         component={Feed}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Notifications"
//         component={Notifications}
//         options={{
//           tabBarLabel: 'Updates',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="bell" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
//
// export default MyTabs
//v5
// import React from 'react';
// import { Button, Text, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
//
// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//         <Button
//           title="Go to Settings"
//           onPress={() => this.props.navigation.navigate('Settings')}
//         />
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }
//
// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate('Home')}
//         />
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }
//
// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Details!</Text>
//       </View>
//     );
//   }
// }
//
// const HomeStack = createStackNavigator({
//   Home: { screen: HomeScreen },
//   Details: { screen: DetailsScreen },
// });
//
// const SettingsStack = createStackNavigator({
//   Settings: { screen: SettingsScreen },
//   Details: { screen: DetailsScreen },
// });
//
// const MyTabs = createAppContainer(createBottomTabNavigator(
//   {
//     Home: { screen: HomeStack },
//     Settings: { screen: SettingsStack },
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'Home') {
//           iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//         } else if (routeName === 'Settings') {
//           iconName = `ios-options${focused ? '' : '-outline'}`;
//         }
//
//         // You can return any component that you like here! We usually use an
//         // icon component from react-native-vector-icons
//         return <Ionicons name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     },
//   }
// ));
//
// export default MyTabs
// //v6
// import * as React from 'react';
// import { View, StyleSheet, Dimensions, StatusBar, Text} from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';
//
// const ProfileRoute = () => (
//   <View><Text>Hello</Text></View>
// );
//
// const SettingsRoute = () => (
// <View><Text>World</Text></View>
// );
//
// const initialLayout = { width: Dimensions.get('window').width };
//
// export default function TabViewExample(props) {
//
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'profile', title: 'Profile' },
//     { key: 'settings', title: 'Settings' },
//   ]);
//
//   const renderScene = SceneMap({
//     profile: ProfileRoute,
//     settings: SettingsRoute,
//   });
//
//   return (
//     <TabView
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       initialLayout={initialLayout}
//       style={styles.container}
//     />
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: 0,
//   },
//   scene: {
//     flex: 1,
//   },
// });
//v7
// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//
// function FeedScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed!</Text>
//     </View>
//   );
// }
//
// function NotificationsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications!</Text>
//     </View>
//   );
// }
//
// function ProfileScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Profile!</Text>
//     </View>
//   );
// }
//
// const Tab = createMaterialTopTabNavigator();
//
// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Feed"
//       tabBarOptions={{
//         activeTintColor: '#e91e63',
//         labelStyle: { fontSize: 12 },
//         style: { backgroundColor: 'powderblue' },
//       }}
//     >
//       <Tab.Screen
//         name="Feed"
//         component={FeedScreen}
//         options={{ tabBarLabel: 'Home' }}
//       />
//       <Tab.Screen
//         name="Notifications"
//         component={NotificationsScreen}
//         options={{ tabBarLabel: 'Updates' }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{ tabBarLabel: 'Profile' }}
//       />
//     </Tab.Navigator>
//   );
// }
//
// export default function TabViewExample() {
//   return (
//     <Stack.Navigator>
//       <MyTabs />
//     </Stack.Navigator>
//   );
// }

//v9
// import React, { Component } from 'react';
// import { View } from 'react-native';
//
// import { Container, Navbar } from 'navbar-native';
// import PropTypes from 'prop-types';
//
// export default class TabViewExample extends Component {
//     render() {
//         return (
//             <Container>
//                 <Navbar
//                     title={"Navbar Native"}
//                     left={{
//                         icon: "ios-arrow-back",
//                         label: "Back",
//                         onPress: () => {alert('Go back!')}
//                     }}
//                     right={[{
//                         icon: "ios-search",
//                         onPress: () => {alert('Search!')}
//                     },{
//                         icon: "ios-menu",
//                         onPress: () => {alert('Toggle menu!')}
//                     }]}
//                 />
//             </Container>
//         );
//     }
// }
//v10
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import FolderIcon from '@material-ui/icons/Folder';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import { View, Text } from 'react-native';
//
// const useStyles = makeStyles({
//   root: {
//     width: 500,
//   },
// });
//
// export default function LabelBottomNavigation() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState('Recents');
//
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//
//   return (
//     <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
//       <BottomNavigationAction label="Recents" value="Recents" icon={<RestoreIcon />} component={Recents}/>
//
//     </BottomNavigation>
//   );
// }
//
// function Recents() {
//   return (<View><Text>Some Text</Text></View>);
// }
//v11
// import React, { PureComponent } from 'react';
// import { BottomNavigation, FontIcon } from 'react-md';
//
// import Recent from './ProfilePageScreen';
// import Favorites from './ContactsScreen';
// import Nearby from './SettingsScreen';
//
//
// const links = [{
//   label: 'Recent',
//   icon: <FontIcon>access_time</FontIcon>,
// }, {
//   label: 'Favorites',
//   icon: <FontIcon>favorite</FontIcon>,
// }, {
//   label: 'Nearby',
//   icon: <FontIcon>place</FontIcon>,
// }];
//
// export default class Fixed extends PureComponent {
//   state = { title: links[0].label, children: <Recent /> };
//
//   handleNavChange = (activeIndex) => {
//     const title = links[activeIndex].label;
//     let children;
//     switch (activeIndex) {
//       case 1:
//         children = <Favorites key="favorites" />;
//         break;
//       case 2:
//         children = <Nearby key="nearby" />;
//         break;
//       default:
//         children = <Recent key="recent" />;
//     }
//
//     this.setState({ title, children });
//   };
//
//   render() {
//     const { title, children } = this.state;
//
//     return (
//         {children}
//     );
//   }
// }
//v12
// import { Route, withRouter, BrowserRouter as Router, Switch } from 'react-router-dom';
// import mobiscroll from '@mobiscroll/react';
// import '@mobiscroll/react/dist/css/mobiscroll.min.css';
//
// mobiscroll.setupReactRouter(Route, withRouter);
//
// export default class NavBar extends React.Component {
//     render() {
//         return (
//             <Router>
//                 <mobiscroll.Form>
//                     <mobiscroll.FormGroup>
//                         <mobiscroll.FormGroupTitle>Icon only</mobiscroll.FormGroupTitle>
//                         <mobiscroll.BottomNav
//                             theme="ios"
//                             themeVariant="light"
//                             type="bottom"
//                             display="inline"
//                         >
//                             <mobiscroll.NavItem to="/news" icon="newspaper"></mobiscroll.NavItem>
//                             <mobiscroll.NavItem to="/people" icon="material-people"></mobiscroll.NavItem>
//                             <mobiscroll.NavItem to="/messages" icon="bubble"></mobiscroll.NavItem>
//                             <mobiscroll.NavItem to="/notifications" icon="fa-globe"></mobiscroll.NavItem>
//                         </mobiscroll.BottomNav>
//                     </mobiscroll.FormGroup>
//                     <mobiscroll.FormGroup>
//                         <mobiscroll.FormGroupTitle>Icon and label</mobiscroll.FormGroupTitle>
//                         <mobiscroll.BottomNav
//                             theme="ios"
//                             themeVariant="light"
//                             type="bottom"
//                             display="inline"
//                         >
//                             <mobiscroll.NavItem to="/news" icon="newspaper">News</mobiscroll.NavItem>
//                             <mobiscroll.NavItem to="/people" icon="material-people">People</mobiscroll.NavItem>
//                             <mobiscroll.NavItem to="/messages" icon="bubble">Messages</mobiscroll.NavItem>
//                             <mobiscroll.NavItem to="/notifications" icon="fa-globe">Notifications</mobiscroll.NavItem>
//                         </mobiscroll.BottomNav>
//                     </mobiscroll.FormGroup>
//                     <mobiscroll.FormGroup>
//                         <mobiscroll.FormGroupTitle>Icon and label with badge</mobiscroll.FormGroupTitle>
//                         <mobiscroll.BottomNav
//                             theme="ios"
//                             themeVariant="light"
//                             type="bottom"
//                             display="inline"
//                         >
//                             <mobiscroll.NavItem to="/news" icon="newspaper">News</mobiscroll.NavItem>
//                             <mobiscroll.NavItem to="/people" icon="material-people" badge="1">People</mobiscroll.NavItem>
//                             <mobiscroll.NavItem to="/messages" icon="bubble" badge="9">Messages</mobiscroll.NavItem>
//                             <mobiscroll.NavItem to="/notifications" icon="fa-globe">Notifications</mobiscroll.NavItem>
//                         </mobiscroll.BottomNav>
//                     </mobiscroll.FormGroup>
//                     <mobiscroll.FormGroup>
//                         <mobiscroll.FormGroupTitle>Show more</mobiscroll.FormGroupTitle>
//                         <mobiscroll.BottomNav
//                             theme="ios"
//                             themeVariant="light"
//                             type="bottom"
//                             display="inline"
//                         >
//                             <mobiscroll.NavItem to="/news" icon="newspaper">News</mobiscroll.NavItem>
//                             <mobiscroll.NavItem to="/people" icon="material-people" badge="1">People</mobiscroll.NavItem>
//                             <mobiscroll.NavItem to="/messages" icon="bubble" badge="9">Messages</mobiscroll.NavItem>
//                             <mobiscroll.NavItem to="/notifications" icon="fa-globe">Notifications</mobiscroll.NavItem>
//                             <mobiscroll.NavItem to="/yourstory" icon="camera">Your story</mobiscroll.NavItem>
//                             <mobiscroll.NavItem to="/events" icon="calendar">Events</mobiscroll.NavItem>
//                             <mobiscroll.NavItem to="/preferences" icon="line-settings">Preferences</mobiscroll.NavItem>
//                         </mobiscroll.BottomNav>
//                     </mobiscroll.FormGroup>
//                     <mobiscroll.FormGroup>
//                         <Switch>
//                             <Route path="/news" component={News} />
//                             <Route path="/people" component={People} />
//                             <Route path="/messages" component={Messages} />
//                             <Route path="/notifications" component={Notifications} />
//                             <Route path="/yourstory" component={Story} />
//                             <Route path="/events" component={MyEvents} />
//                             <Route path="/preferences" component={Preferences} />
//                         </Switch>
//                     </mobiscroll.FormGroup>
//                 </mobiscroll.Form>
//             </Router>
//         );
//     }
// }
//
// const News = () => <mobiscroll.FormGroupTitle>News component content</mobiscroll.FormGroupTitle>;
// const People = () => <mobiscroll.FormGroupTitle>People component content</mobiscroll.FormGroupTitle>;
// const Messages = () => <mobiscroll.FormGroupTitle>Messages component content</mobiscroll.FormGroupTitle>;
// const Notifications = () => <mobiscroll.FormGroupTitle>Notifications component content</mobiscroll.FormGroupTitle>;
// const Story = () => <mobiscroll.FormGroupTitle>Story component content</mobiscroll.FormGroupTitle>;
// const MyEvents = () => <mobiscroll.FormGroupTitle>MyEvents component content</mobiscroll.FormGroupTitle>;
// const Preferences = () => <mobiscroll.FormGroupTitle>Preferences component content</mobiscroll.FormGroupTitle>;
