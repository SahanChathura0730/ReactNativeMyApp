// app/_layout.tsx
import Footer from "@/layouts/footer";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>
        {/* ✅ StatusBar inside SafeAreaProvider + SafeAreaView */}
        <StatusBar
          style="dark"
          backgroundColor={Platform.OS === "android" ? "#ffffff" : "transparent"}
          translucent={Platform.OS === "ios"}
        />

        <View className="flex-1">
          <Slot />
        </View>

        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RootLayout;
