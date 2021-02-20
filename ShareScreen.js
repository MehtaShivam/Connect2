import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

function Share(props) {
  const { navigation } = props
  return (
    <SafeAreaView>
      <QRCode size={ 200 } value="https://www.zapper.com"/>
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
export default Share
