import React from 'react';
import { Text, View } from 'react-native';

const subjects = [
  {
    name: "Mathematics",
    progress: 75,
    image: require('../assets/images/react-logo.png'),
    colors: ['#FF6B6B', '#FFD93D'],
  },
  {
    name: "Science",
    progress: 50,
    image: require('../assets/images/react-logo.png'),
    colors: ['#6C63FF', '#9D79FF'],
  },
];

const Subjects = () => {
  return (
    <View className="flex-1 bg-gray-50">
          <View className="flex-1 items-center justify-center">
            <Text className="text-xl font-bold">Hello from Subject</Text>
          </View>
        </View>
  )
}

export default Subjects