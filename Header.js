import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({navigation, title}){

  const openMenu = () => {
    navigation.openDrawer();
  }
  return(
    <View style={styles.header}>
    <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333'
  },
  icon: {
    position: 'absolute',
    left: 16
  }
})
