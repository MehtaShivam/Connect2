import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'

function Settings(props) {
  const { navigation } = props
  return (
    <SafeAreaView style={{flex: 1}}><Text>{props.name}</Text></SafeAreaView>
  )
}

const styles_four = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#ADD8e6',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#ADD8e6',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white',
      fontSize: 20
   }
})
export default Settings
