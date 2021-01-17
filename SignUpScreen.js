import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert, SafeAreaView } from 'react-native';
import * as firebase from 'firebase';

function SignUp(props) {
  const { navigation } = props

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const createUser = () =>{
    if(password.length < 8){
      Alert.alert("Password must have more than 8 characters");
    }else if (password.search(/[a-z]/i) < 0){
      Alert.alert("Password must have at least one letter");
    }else if (password.search(/[0-9]/)<0){
      Alert.alert("Password must have at least one number");
    }else if (password.search(/[!@#$%^&*()]/) < 0){
      Alert.alert("Password must contain one of these special characters: !@#$%^&*()");
    }else{
      if (confirmPassword === password){
        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
          navigation.navigate('NavBar')
          Alert.alert("Account created! :)");
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Email address already in use');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('Email is invalid');
          }
          console.log(error)
        });
      }else{
        Alert.alert('Passwords do not match');
      }
    }
  }

  return (
    <SafeAreaView>
    <Text style={{fontSize: 40, backgroundColor: '#ADD8e6', textAlign: 'center', color: 'white'}}>Connect</Text>
      <TextInput style = {styles_four.input}
       placeholder = "Email"
       placeholderTextColor = "#ADD8e6"
       autoCapitalize = "none"
       value={email}
       onChangeText={text=>setEmail(text)}
       />
      <TextInput style = {styles_four.input}
       placeholder = "Password"
       placeholderTextColor = "#ADD8e6"
       autoCapitalize = "none"
       value={password}
       onChangeText={text=>setPassword(text)}
       secureTextEntry={true}
       />
       <Text style={{textAlign: 'center'}}>
       Password must be at least 8 characters, contain at least one number, and at least one of these special characters: !@#$%^&*()
       </Text>
       <TextInput style = {styles_four.input}
        placeholder = "Confirm Password"
        placeholderTextColor = "#ADD8e6"
        autoCapitalize = "none"
        value={confirmPassword}
        onChangeText={text=>setConfirmPassword(text)}
        secureTextEntry={true}
        />
        <TouchableOpacity style = {styles_four.submitButton}
        onPress ={createUser}>
           <Text style = {styles_four.submitButtonText}>Sign Up</Text>
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
      height: 40,
   },
   submitButtonText:{
      textAlign: 'center',
      color: 'white',
      fontSize: 16
   }
})
export default SignUp
