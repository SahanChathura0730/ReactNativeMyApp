import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'

interface IHeader {
  Center?: React.ReactNode,
  Right?: React.ReactNode
}

const Header = ({ Center, Right }: IHeader) => {
  return (
    <View
      style={{ elevation: 5 }}
      className="w-full justify-between h-[50px] flex-row bg-gray-300 px-5 items-center"
    >
      {/* Left side menu icon */}
      <TouchableOpacity>
        <Ionicons name="menu" size={24} />
      </TouchableOpacity>


      {/* Center content or empty */}
      {Center ? Center : <View />}

      {/* Right icons */}
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
            <TouchableOpacity>
              {/* ChatGPT doesn't have an Ionicon, so you might want to use a custom icon or image here */}
              <Ionicons name="rocket-outline" size={24} /> 
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  )
}

export default Header
