import React from 'react'
import { Alert, Button, SafeAreaView, StyleSheet } from 'react-native'
import * as firebase from 'firebase'

function Settings({ navigation }) {
  const signOutUser = () => firebase.auth().signOut().then(() => {
    // Sign-out successful.
    navigation.navigate('Home')
  }).catch((error) => {
    Alert.alert('An Error Occured')
  })
  return (
    <SafeAreaView style={ { flex: 1 } }>
      <Button
        title='Add Profile'
        onPress={ () => navigation.navigate('AddProfile') }
      />
      <Button
        title='Remove Profile'
      />
      <Button
        title='Log Off'
        onPress={ signOutUser }
      />
    </SafeAreaView>
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
    height: 40
  },
  submitButtonText: {
    color: 'white',
    fontSize: 20
  }
})
export default Settings
