import React, { useState } from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase'

function ForgotPassword(props) {
  const { navigation } = props
  const [email, setEmail] = useState(null)
  const forgotPassword = () => {
    navigation.navigate('Home')
    firebase.auth().sendPasswordResetEmail(email).then(() => {
      Alert.alert('An email has been sent')
    }).catch((error) => {
      Alert.alert('Email is incorrect or not found')
    })
  }
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
      <TouchableOpacity style={ styles_four.submitButton }
                        onPress={ forgotPassword }>
        <Text style={ styles_four.submitButtonText }>Submit</Text>
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
export default ForgotPassword
