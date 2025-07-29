// app/_layout.tsx
import DrawerNavigator from "@/layouts/DrawerNavigator";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }} edges={["top", "bottom"]}>
        <StatusBar
          barStyle="dark-content" // or "light-content"
          backgroundColor="#ffffff"
          translucent={false}
        />

        <DrawerNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RootLayout;
