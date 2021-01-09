import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

function Contacts(props) {
  const { navigation } = props
  return (
    <View style={{flex: 1}}>
    <SafeAreaView style={{backgroundColor: '#ADD8e6'}}>
    <TextInput
      placeholder="Search"
      placeholderTextColor='white'
      style={{
        backgroundColor:'#ADD8e6',
        height: 50,
        fontSize: 24,
        padding: 10,
        color: 'white',
        borderBottomWidth: 0.5,
        borderBottomColor: 'white'
      }}/>
      <View style={{flex: 1, backgroundColor: '#ADD8e6'}}/>
    </SafeAreaView>
    </View>
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
export default Contacts
