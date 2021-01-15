import React, { useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, SafeAreaView, ScrollView, FlatList, StatusBar, Platform, Button } from 'react-native';
import NavigationBar from 'react-native-navbar';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {
  Container,
  Title,
  Header,
  Content,
  Footer
} from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function Profile(props) {
  const { navigation } = props
  const [activeTab, setActiveTab] = useState('Profile');
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  const [image, setImage] = useState(null);
  const [showButton, setShowButton] = useState(true);
  const [profileName, setProfileName] = useState();
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }

    setShowButton(false)
  };

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
    <ScrollView horizontal={true}>
    <View style={{alignItems: 'center', justifyContent: 'center', paddingLeft: 50}}>
      <ScrollView horizontal={true}>
      <View>
      <TextInput style = {styles_four.input}
       placeholder = "Profile Name"
       placeholderTextColor = "#ADD8e6"
       autoCapitalize = "none"
       onChangeText={text=>setProfileName(text)}
       />
      {showButton &&
        <Button title="Pick an image from camera roll" onPress={pickImage} />
      }
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius:200/2 }} />}
      </View>
      </ScrollView>
      <ScrollView horizontal={true}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </ScrollView>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <ScrollView horizontal={true}>
      {showButton &&
        <Button title="Pick an image from camera roll" onPress={pickImage} />
      }
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius:200/2 }} />}
      </ScrollView>
      <ScrollView horizontal={true}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </ScrollView>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

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

export default Profile
