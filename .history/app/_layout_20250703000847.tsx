import { Slot } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const RooterLayout = () => {
  return (
    <View>
      <Slot/>
      <Text>RooterLayout</Text>
    </View>
  )
}

export default RooterLayout