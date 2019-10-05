// @flow
import React from 'react'
import { Text, View } from 'react-native'

import contstans from '../../constants'

import { styles } from './styles'


const OfflineComponent = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{contstans.TXT_YOU_ARE_OFFLINE}</Text>
      <Text style={styles.text}>
        {contstans.TXT_CHECK_YOUR_INTERNET_CONNECTION}
      </Text>

    </View>
  )
}


export default OfflineComponent