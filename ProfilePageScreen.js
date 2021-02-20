import React, { useEffect, useState } from 'react'
import {
  ActionSheetIOS,
  Alert,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

const OPTIONS = ['Cancel', 'Instagram', 'Facebook', 'Snapchat', 'WhatsApp', 'Email', 'Phone Number', 'Add Account', 'Connect']

function Profile() {
  const navigation = useNavigation()
  const [activeTab, setActiveTab] = useState('Profile')
  const [image, setImage] = useState(null)
  const [showButton, setShowButton] = useState(true)
  const [profileName, setProfileName] = useState()

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert('Need access to your camera roll')
        }
      }
    })()
  }, [])

  const [exampleState, setExampleState] = useState([
    { id: '0', TextInput: 'Identifier', accountType: 'Account Type' }
  ])

  const addElement = () => {
    const newArray = [...exampleState, {
      id: (Math.max(...exampleState.map(a => +a.id)) + 1).toString(),
      TextInput: 'Identifier',
      accountType: 'Account Type'
    }]
    setExampleState(newArray)
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.cancelled) {
      setImage(result.uri)
    }

    setShowButton(false)
  }

  const pickAccount = (item) =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: OPTIONS,
        destructiveButtonIndex: 8,
        cancelButtonIndex: 0
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 7) {
          item.accountType = 'Add functionality'
        } else if (buttonIndex === 8) {
          item.accountType = 'Account'
        } else {
          item.accountType = OPTIONS[buttonIndex]
          if (item.accountType === 'Email') {
            item.TextInput = 'user@domain.com'
          } else if (item.accountType === 'Phone Number') {
            item.TextInput = '123-456-7890'
          } else {
            item.TextInput = '@username'
          }
        }
        let copyState = exampleState.slice()
        copyState.splice(copyState.findIndex(i => i.id === item.id), 1, item)
        setExampleState(copyState)
      }
    )

  const renderItem = ({ item }) => {
    return (
      <View style={ {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      } }>
        <TouchableOpacity
          style={ styles_four.submitButton }
          onPress={ () => pickAccount(item) }
        >
          <Text style={ styles_four.submitButtonText }>{ item.accountType }</Text>
        </TouchableOpacity>
        <TextInput
          style={ styles_four.input }
          placeholder={ item.TextInput }
          placeholderTextColor="#ADD8e6"
        />
      </View>
    )
  }
  return (
    <SafeAreaView style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
      <ScrollView horizontal={ true }>
        <View style={ { alignItems: 'center', justifyContent: 'center' } }>
          <View style={ { flex: 1 } }>
            <ScrollView style={ { flex: 1 } } horizontal={ true }>
              <View style={ { margin: 5 } }>
                <TextInput style={ styles_four.input, { margin: 10 } }
                           placeholder="Profile Name"
                           placeholderTextColor="#ADD8e6"
                           autoCapitalize="none"
                           onChangeText={ text => setProfileName(text) }
                           textAlign='center'
                />
                { showButton &&
                <FontAwesome.Button name="upload" backgroundColor="#ADD8e6"
                                    style={ {
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      margin: 5
                                    } } onPress={ pickImage }>
                  Upload Photo
                </FontAwesome.Button>
                }
                <View style={ {
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center'
                } }>

                  { image &&
                  <View style={ {
                    shadowRadius: 4,
                    shadowOpacity: 0.8,
                    shadowColor: '#ADD8e6',
                    shadowOffset: { width: 0, height: 2 },
                    alignItems: 'center',
                    justifyContent: 'center'
                  } }>
                    <Image source={ { uri: image } } style={ {
                      width: 200,
                      height: 200,
                      borderRadius: 200 / 2,
                      borderWidth: 1,
                      margin: 10,
                      borderColor: '#ADD8e6'
                    } }
                    />
                  </View>
                  }
                  { image &&
                  <TouchableOpacity
                    style={ {
                      borderWidth: 1,
                      borderColor: '#ADD8e6',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 50,
                      height: 50,
                      backgroundColor: '#ADD8e6',
                      borderRadius: 50 / 2,
                      position: 'absolute',
                      right: 25,
                      bottom: 15
                    } }
                    onPress={ pickImage }
                  >
                    <Ionicons name="camera-outline" size={ 32 } color="white"/>
                  </TouchableOpacity> }
                </View>
                <View style={ { margin: 1 } }>
                  <FontAwesome.Button name="qrcode" backgroundColor="#ADD8e6"
                                      style={ {
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                      } }
                                      onPress={ () => navigation.navigate('Share') }>
                    Share
                  </FontAwesome.Button>
                </View>
                <View style={ { flexDirection: 'row', margin: 1 } }>
                  <FontAwesome.Button name="address-card"
                                      backgroundColor="#ADD8e6" style={ {
                    alignItems: 'center',
                    justifyContent: 'center'
                  } } onPress={ () => Alert.alert('Add functionality') }>
                    Add Profile
                  </FontAwesome.Button>
                  <FontAwesome.Button name="trash" backgroundColor="#ADD8e6"
                                      style={ {
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                      } }
                                      onPress={ () => Alert.alert('Add functionality') }>
                    Remove Profile
                  </FontAwesome.Button>
                </View>
                <View style={ { margin: 1 } }>
                  <FontAwesome.Button name="plus" backgroundColor="#ADD8e6"
                                      style={ {
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                      } } onPress={ addElement }>
                    Add Contact Information
                  </FontAwesome.Button>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={ { maxHeight: '27%' } }>
            <FlatList
              style={ { flexGrow: 0 } }
              keyExtractor={ item => item.id }
              data={ exampleState }
              renderItem={ renderItem }
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
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  },
  addProfileButton: {
    position: 'absolute',
    bottom: 0
  }
})

const styles_four = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  input: {
    margin: 0,
    height: 40,
    borderWidth: 1,
    borderColor: '#ADD8e6'
  },
  submitButton: {
    backgroundColor: '#ADD8e6',
    padding: 10,
    height: 40,
    margin: 1
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  }
})

export default Profile
