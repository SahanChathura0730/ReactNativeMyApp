import React from 'react'
import { Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={{elevation: 5}} className='w-full justify-between h-[50px] flex-row bg-gray-300 px-5 items-center'>
      <View>
         <Text>Header</Text>
      </View>
      <View>
         <Text>Header</Text>
      </View>
      <View>
         <Text>Header</Text>
      </View>
    </View>
  )
}

export default Header
