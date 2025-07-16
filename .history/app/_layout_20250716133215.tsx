// app/_layout.tsx
import Footer from "@/layouts/footer";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }} edges={["top", "bottom"]}>
        {/* ✅ Always-visible StatusBar */}
        <StatusBar
          barStyle="dark-content" // or "light-content"
          backgroundColor="#ffffff"
          translucent={false}
        />

        <Drawer
          screenOptions={{
            headerShown: false, // ✅ hide default drawer header
          }}
        >          
          <Drawer.Screen name="index" options={{ title: "Home" }} />
          <Drawer.Screen name="profile" options={{ title: "Profile" }} />
          <Drawer.Screen name="subjects" options={{ title: "Subjects" }} />
          <Drawer.Screen name="classes" options={{ title: "Classes" }} />
        </Drawer>

        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RootLayout;
