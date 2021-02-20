import React, { useState } from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase'

function Home(props) {
  const { navigation } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signInUser = () =>
    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
      {navigation.navigate('NavBar')}
    }).catch((error) => {
      Alert.alert('Email or Password is incorrect')
    })

  // submit = () => {
  //   firebase.auth().signInWithEmailAndPassword(email, password)
  // }

  return (
    <SafeAreaView>
      <Text style={ {
        fontSize: 40,
        backgroundColor: '#ADD8e6',
        textAlign: 'center',
        color: 'white'
      } }>Connect</Text>
      <TextInput style={ styles_four.input }
                 placeholder="Email"
                 placeholderTextColor="#ADD8e6"
                 onChangeText={ text => setEmail(text) }
      />

      <TextInput style={ styles_four.input }
                 placeholder="Password"
                 placeholderTextColor="#ADD8e6"
                 onChangeText={ text => setPassword(text) }
                 secureTextEntry={ true }
      />

      <TouchableOpacity
        style={ styles_four.submitButton }
        onPress={ signInUser }
      >
        <Text style={ styles_four.submitButtonText }>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={ styles_four.submitButton }
        onPress={
          () => navigation.navigate('Forgot Password')
        }>
        <Text style={ styles_four.submitButtonText }>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={ styles_four.submitButton }
        onPress={
          () => navigation.navigate('Sign Up')
        }>
        <Text style={ styles_four.submitButtonText }>Sign Up</Text>
      </TouchableOpacity>
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
    textAlign: 'center',
    color: 'white',
    fontSize: 16
  }
})

export default Home
