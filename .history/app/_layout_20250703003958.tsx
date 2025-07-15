import Footer from "@/layouts/footer";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View } from "react-native";

const RootLayout = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" backgroundColor="#ffffff" translucent={false} />
      
      <View className="flex-1">
        <Slot />
      </View>

      <Footer />
    </SafeAreaView>
  );
};

export default RootLayout;
