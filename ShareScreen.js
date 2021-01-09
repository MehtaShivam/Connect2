import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import {
  Container,
  Title,
  Header,
  Content,
  Footer
} from 'native-base';


function Share(props) {
  const { navigation } = props
  return (
    <SafeAreaView>
    <Text>Hello world</Text>
    </SafeAreaView>
  );
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
export default Share
