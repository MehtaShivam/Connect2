import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import * as firebase from 'firebase';

function SignUp(props) {
  const { navigation } = props

  const [phoneNumber, setPhoneNumber] = useState("5555555555");
  const [email, setEmail] = useState("abcd@gmail.com");
  const [username, setUsername] = useState("bob_builder");
  const [password, setPassword] = useState("Make it strong");
  const [confirmPassword, setConfirmPassword] = useState("Make it strong");

  // submit = () => {
  //   firebase.auth().createUserWithEmailAndPassword(email, password)
  // }

  return (
    <React.Fragment>
        <TextInput style = {styles_four.input}
         placeholder = "Phone Number"
         placeholderTextColor = "#ADD8e6"
         autoCapitalize = "none"
         value= {phoneNumber}
         onChangeText={text=>setPhoneNumber(text)}
         />
        <TextInput style = {styles_four.input}
         placeholder = "Email"
         placeholderTextColor = "#ADD8e6"
         autoCapitalize = "none"
         value= {email}
         onChangeText={text=>setEmail(text)}
         />
       <TextInput style = {styles_four.input}
        placeholder = "Username"
        placeholderTextColor = "#ADD8e6"
        autoCapitalize = "none"
        value= {username}
        onChangeText={text=>setUsername(text)}
        />
      <TextInput style = {styles_four.input}
       placeholder = "Password"
       placeholderTextColor = "#ADD8e6"
       autoCapitalize = "none"
       value= {password}
       onChangeText={text=>setPassword(text)}
       />
       <TextInput style = {styles_four.input}
        placeholder = "Confirm Password"
        placeholderTextColor = "#ADD8e6"
        autoCapitalize = "none"
        value= {confirmPassword}
        onChangeText={text=>setConfirmPassword(text)}
        />
        <TouchableOpacity style = {styles_four.submitButton}
        onPress ={ () => firebase.auth().createUserWithEmailAndPassword(email, password) }
           >
           <Text style = {styles_four.submitButtonText}> Submit </Text>
        </TouchableOpacity>
        </React.Fragment>
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
      textAlign: 'center',
      color: 'white',
      fontSize: 20
   }
})
export default SignUp
