// app/_layout.tsx
import Footer from "@/layouts/footer";
import { Slot } from "expo-router";
//import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";

const RootLayout = () => {
  return (
      <SafeAreaView>
        <StatusBar
          hidden = {false}
          barStyle= "dark-content"
        />
        <View className="flex-1">
          <Slot />
        </View>
        <Footer />
      </SafeAreaView>
  );
};

export default RootLayout;
