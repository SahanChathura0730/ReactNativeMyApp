// app/_layout.tsx
import Footer from "@/layouts/footer";
import { Slot } from "expo-router";
import React from "react";
import { StatusBar, View } from "react-native";

const RootLayout = () => {
  return (
    <View className="flex-1">
      <StatusBar backgroundColor="#ffffff" />
      <View className="flex-1">
        <Slot />
      </View>
      <Footer />
    </View>
  );
};

export default RootLayout;
