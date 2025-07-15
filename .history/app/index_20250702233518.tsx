import Footer from '@/layouts/footer'
import React from 'react'
import { Text, View } from 'react-native'

const index = () => {
  return (
    <View className="flex-1 bg-gray-50">
      <View className="flex-1 items-center justify-center">
        <Text className="text-xs font-bold">Hello from Home</Text>
      </View>
      <Footer active="home" />
    </View>
  )
}

export default index