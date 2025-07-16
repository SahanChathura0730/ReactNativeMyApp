import { Ionicons } from '@expo/vector-icons'
import { Text } from '@react-navigation/elements'
import { DrawerActions } from '@react-navigation/native'
import { useNavigation } from 'expo-router'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'

interface IHeader {
  Center?: String,
  Right?: React.ReactNode
}

const Header = ({ Center, Right }: IHeader) => {
  const navigation = useNavigation();

  return (
    <View
      style={{ elevation: 5 }}
      className="w-full justify-between h-[50px] flex-row bg-gray-300 px-5 items-center"
    >
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Ionicons name="menu" size={24} />
      </TouchableOpacity>

      {Center ? <Text className='text-2xl font-bold'>{Center}</Text> : <View />}

      <View style={{ flexDirection: 'row', gap: 20 }}>
        {Right ? (
          Right
        ) : (
          <>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={24} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="settings-outline" size={24} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="chatbubble-ellipses-outline" size={24} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  )
}

export default Header
