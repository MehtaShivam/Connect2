import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'

function ForgotPassword(props) {
  const { navigation } = props
  return (
    <TouchableOpacity style = {styles_four.submitButton}
        onPress = {
              () => navigation.navigate('Home')
           }>
           <Text style = {styles_four.submitButtonText}> An email with a temporary password has been sent. </Text>
        </TouchableOpacity>
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
export default ForgotPassword
