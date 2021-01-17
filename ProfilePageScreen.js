import React, { useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, SafeAreaView, ScrollView, FlatList, StatusBar, Platform, Button, ActionSheetIOS, Alert} from 'react-native';
import NavigationBar from 'react-native-navbar';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {
  Container,
  Title,
  Header,
  Content,
  Footer
} from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

function Profile() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Profile');
  // const renderItem = ({ item }) => (
  //   <Item title={item.title} />
  // );
  const [image, setImage] = useState(null);
  const [showButton, setShowButton] = useState(true);
  const [profileName, setProfileName] = useState();
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Need access to your camera roll');
        }
      }
    })();
  }, []);

  const [initialElements, updateElements]  = useState([
     { id : "Contact Information 0", TextInput : "Username/Email/Phone Number"},
   ]);

   const [exampleState, setExampleState] = useState(initialElements);
   const [idx, incr] = useState(1);

   const addElement = () => {
     var newArray = [...initialElements , {id : "Contact Information " + idx, TextInput: "Username/Email/Phone Number"}];
     incr(idx + 1);
     setExampleState(newArray);
     updateElements(newArray);
   }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }

    setShowButton(false)
  };

  const [result, setResult] = useState("Account");

  const pickAccount = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", "Instagram", "Facebook", "Snapchat", "WhatsApp", "Email", "Phone Number", "Connect"],
        destructiveButtonIndex: 7,
        cancelButtonIndex: 0
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        }else if (buttonIndex === 1){
          setResult("Instagram")
        }else if (buttonIndex === 7){
          setResult("Account")
        }else{
          setResult("Add functionality")
        }
      }
    );

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <ScrollView horizontal={true}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <ScrollView style={{flex: 1}} horizontal={true}>
            <View>
              <TextInput style = {styles_four.input, {margin: 15}}
               placeholder = "Profile Name"
               placeholderTextColor = "#ADD8e6"
               autoCapitalize = "none"
               onChangeText={text=>setProfileName(text)}
               textAlign='center'
               />
              {showButton &&
                <TouchableOpacity
                   style = {styles_four.submitButton}
                   onPress = {pickImage}
                   >
                   <Text style = {styles_four.submitButtonText}>Upload profile picture</Text>
                </TouchableOpacity>
              }
              {image &&
                <View style={{shadowRadius: 4, shadowOpacity: 0.8, shadowColor: "#ADD8e6", shadowOffset: { width: 0, height: 2 }}}>
                <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius:200/2, borderWidth: 1, margin: 10 }}
                />
                </View>
              }
              <TouchableOpacity
                 style = {styles_four.submitButton}
                 onPress = {()=> navigation.navigate('Share')}
                 >
                 <Text style = {styles_four.submitButtonText}>Share</Text>
              </TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                 style = {styles_four.submitButton}
                 onPress = {()=>Alert.alert("Add functionality")}
                 >
                 <Text style = {styles_four.submitButtonText}>Add Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity
                 style = {styles_four.submitButton}
                 onPress = {()=>Alert.alert("Add functionality")}
                 >
                 <Text style = {styles_four.submitButtonText}>Remove Profile</Text>
              </TouchableOpacity>
              </View>
              <TouchableOpacity
                 style = {styles_four.submitButton}
                 onPress = {addElement}
                 >
                 <Text style = {styles_four.submitButtonText}>Add Contact Information</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={{maxHeight: "27%"}}>
            <FlatList
              style={{flexGrow: 0}}
              keyExtractor = {item => item.id}
              data={exampleState}
              renderItem = {item => (
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity
                     style = {styles_four.submitButton}
                     onPress = {pickAccount}
                     >
                     <Text style = {styles_four.submitButtonText}>{result}</Text>
                  </TouchableOpacity>
                  <TextInput
                   style = {styles_four.input}
                   placeholder = {item.item.TextInput}
                   placeholderTextColor = "#ADD8e6"
                  />
                </View>
                )}
            />
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  addProfileButton: {
    position: 'absolute',
    bottom:0,
  }
});

const styles_four = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 0,
      height: 40,
      borderWidth: 1,
      borderColor: "#ADD8e6"
   },
   submitButton: {
      backgroundColor: '#ADD8e6',
      padding: 10,
      height: 40,
   },
   submitButtonText:{
      color: 'white',
      fontSize: 16,
      textAlign: 'center'
   }
})

export default Profile
