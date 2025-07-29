import DrawerNavigator from "@/layouts/DrawerNavigator";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }} edges={["top", "bottom"]}>
        <StatusBar
          barStyle="dark-content" // or "light-content"
          backgroundColor="white"
          translucent={false}
        />

        <DrawerNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RootLayout;
