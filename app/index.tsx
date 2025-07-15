import Header from '@/layouts/header'
import React from 'react'
import { Text, View } from 'react-native'
import "../global.css"

const index = () => {
  return (
    <View className="flex-1 bg-gray-50">
      <Header/>
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl font-bold">Hello from Home</Text>
      </View>
    </View>
  )
}

export default index