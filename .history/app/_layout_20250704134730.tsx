// app/_layout.tsx
import Footer from "@/layouts/footer";
import { Slot } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "blue" }} edges={["top", "bottom"]}>
        {/* ✅ Always-visible StatusBar */}
        <StatusBar
          barStyle="dark-content" // or "light-content"
          backgroundColor="#ffffff"
          translucent={false}
        />

        <Slot />

        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RootLayout;
