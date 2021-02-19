import React from 'react'
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import * as Contacts from 'expo-contacts'
import * as Permissions from 'expo-permissions'

export default class ContactScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      contacts: []
    }
  }

  loadContacts = async () => {
    const permission = await Permissions.askAsync(
      Permissions.CONTACTS
    )

    if (permission.status !== 'granted') {
      return
    }

    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails]
    })

    console.log(data)
    this.setState({ contacts: data, inMemoryContacts: data, isLoading: false })
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    this.loadContacts()
  }

  renderItem = ({ item }) => (
    <View style={ { minHeight: 70, padding: 5 } }>
      <Text style={ { color: '#ADD8e6', fontWeight: 'bold', fontSize: 26 } }>
        { item.firstName + ' ' }
        { item.lastName }
      </Text>
      <Text style={ { color: 'white', fontWeight: 'bold' } }>
      </Text>
    </View>
  )

  searchContacts = value => {
    const filteredContacts = this.state.inMemoryContacts.filter(contact => {
      let contactLowercase = (
        contact.firstName +
        ' ' +
        contact.lastName
      ).toLowerCase()

      let searchTermLowercase = value.toLowerCase()

      return contactLowercase.indexOf(searchTermLowercase) > -1
    })
    this.setState({ contacts: filteredContacts })
  }

  render() {
    return (
      <View style={ { flex: 1 } }>
        <SafeAreaView style={ { backgroundColor: '#ADD8e6' } }/>
        <TextInput
          placeholder="Search"
          placeholderTextColor="white"
          style={ {
            backgroundColor: '#ADD8e6',
            height: 50,
            fontSize: 36,
            padding: 10,
            color: 'white',
            borderBottomWidth: 0.5
          } }
          onChangeText={ value => this.searchContacts(value) }
        />
        <View style={ { flex: 1 } }>
          { this.state.isLoading ? (
            <View
              style={ {
                ...StyleSheet.absoluteFill,
                alignItems: 'center',
                justifyContent: 'center'
              } }
            >
              <ActivityIndicator size="large" color="#ADD8e6"/>
            </View>
          ) : null }
          <FlatList
            data={ this.state.contacts }
            renderItem={ this.renderItem }
            keyExtractor={ (item, index) => index.toString() }
            ListEmptyComponent={ () => (
              <View
                style={ {
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 50
                } }
              >
                <Text style={ { color: '#ADD8e6' } }>No Contacts Found</Text>
              </View>
            ) }
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
