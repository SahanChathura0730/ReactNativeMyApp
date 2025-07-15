import React from 'react'
import { Text, View } from 'react-native'

interface IHeader {
  Left?: React.ReactNode,
  Center?: React.ReactNode,
  Right?: React.ReactNode
}
const Header = ({Left, Center, Right}: IHeader) => {
  return (
    <View style={{elevation: 5}} className='w-full justify-between h-[50px] flex-row bg-gray-300 px-5 items-center'>
      {Left? Left:<View/>}
      {Center? Center:<View/>}
      {Right? Right:<View/>}
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
