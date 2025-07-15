import Header from '@/layouts/header'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'
import "../global.css"

const index = () => {
  return (
    <View className="flex-1 bg-gray-50">
      <Header Left={<Ionicons name="home" size={24} />}/>
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl font-bold">Hello from Home</Text>
      </View>
    </View>
  )
}

export default index