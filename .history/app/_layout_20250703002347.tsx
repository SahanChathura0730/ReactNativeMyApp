// app/_layout.tsx
import Footer from "@/layouts/Footer"; // or correct path
import { Slot } from "expo-router";
import React from "react";
import { View } from "react-native";

const RootLayout = () => {
  return (
    <View className="flex-1">
      <View className="flex-1">
        <Slot /> {/* Renders the current route */}
      </View>
      <Footer />
    </View>
  );
};

export default RootLayout;
