// app/_layout.tsx
import Footer from "@/layouts/footer";
import { Slot } from "expo-router";
import React from "react";
import { View } from "react-native";

const RootLayout = () => {
  return (
    <View className="flex-1">
      <View className="flex-1">
        <Slot />
      </View>
      <Footer />
    </View>
  );
};

export default RootLayout;
