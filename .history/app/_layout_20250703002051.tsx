import Footer from '@/layouts/footer'
import { Slot } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const RooterLayout = () => {
  return (
    <View>
      <Slot/>
      <Footer active="home" />
    </View>
  )
}

export default RooterLayout