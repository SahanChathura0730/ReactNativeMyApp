import Header from '@/layouts/header';
import ColorfulCard from "@freakycoder/react-native-colorful-card";
import React from 'react';
import { View } from 'react-native';
import "../global.css";

const index = () => {
  return (
    <View className="flex-1 bg-gray-50">
      <Header Center={"Home"}/>
      <View className="flex-1 items-center justify-center">
        <ColorfulCard
          title="Sleep"
          value="8"
          valuePostfix="h 42 m"
          footerTitle="Deep Sleep"
          footerValue="3h 13m"
          iconImageSource={require("./assets/sleep.png")}
          style={{ backgroundColor: "#7954ff" }}
          onPress={() => {}}
        />
      </View>
    </View>
  )
}

export default index