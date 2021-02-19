import React from 'react'
import { Image, ScrollView, View } from 'react-native'

import styles from './styles'

export default ({ captures = [] }) => (
  <ScrollView
    horizontal={ true }
    style={ [styles.bottomToolbar, styles.galleryContainer] }
  >
    { captures.map(({ uri }) => (
      <View style={ styles.galleryImageContainer } key={ uri }>
        <Image source={ { uri } } style={ styles.galleryImage }/>
      </View>
    )) }
  </ScrollView>
);
