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
import { FontAwesome, Ionicons, FontAwesomeIcon} from '@expo/vector-icons';

const OPTIONS = ["Cancel", "Instagram", "Facebook", "Snapchat", "WhatsApp", "Email", "Phone Number", "Add Account", "Connect"]
function Profile() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Profile');
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
        options: OPTIONS,
        destructiveButtonIndex: 8,
        cancelButtonIndex: 0
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        }else if (buttonIndex === 7){
          setResult("Add functionality")
        }else if (buttonIndex === 8){
          setResult("Account")
        }else{
          setResult(OPTIONS[buttonIndex])
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
                <FontAwesome.Button name="upload" backgroundColor="#ADD8e6" style={{alignItems: 'center', justifyContent: 'center', margin: 5}} onPress={pickImage}>
                  Upload Photo
                </FontAwesome.Button>
              }
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>

              {image &&
                <View style={{shadowRadius: 4, shadowOpacity: 0.8, shadowColor: "#ADD8e6", shadowOffset: { width: 0, height: 2 }, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius:200/2, borderWidth: 1, margin: 10, borderColor: "#ADD8e6" }}
                />
                </View>
              }
              {image &&
                <TouchableOpacity
                  style={{borderWidth:1,
                         borderColor:'#ADD8e6',
                         alignItems:'center',
                         justifyContent:'center',
                         width:50,
                         height:50,
                         backgroundColor:'#ADD8e6',
                         borderRadius:50/2,
                         position:'absolute',
                         right: 25,
                         bottom: 15}}
                  onPress={pickImage}
                  >
                  <Ionicons name="camera-outline" size={32} color="white" />
                </TouchableOpacity>}
              </View>
              <FontAwesome.Button name="qrcode" backgroundColor="#ADD8e6" style={{alignItems: 'center', justifyContent: 'center', margin: 5}} onPress={()=> navigation.navigate('Share')}>
                Share
              </FontAwesome.Button>
              <View style={{flexDirection: 'row'}}>
              <FontAwesome.Button name="address-card" backgroundColor="#ADD8e6" style={{alignItems: 'center', justifyContent: 'center', margin: 5}} onPress={()=> Alert.alert("Add functionality")}>
                Add Profile
              </FontAwesome.Button>
              <FontAwesome.Button name="trash" backgroundColor="#ADD8e6" style={{alignItems: 'center', justifyContent: 'center', margin: 5}} onPress={()=> Alert.alert("Add functionality")}>
                Remove Profile
              </FontAwesome.Button>
              </View>
              <FontAwesome.Button name="plus" backgroundColor="#ADD8e6" style={{alignItems: 'center', justifyContent: 'center', margin: 5}} onPress={addElement}>
                Add Contact Information
              </FontAwesome.Button>
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
      margin: 1,
   },
   submitButtonText:{
      color: 'white',
      fontSize: 16,
      textAlign: 'center'
   }
})

export default Profile
