// app/_layout.tsx
import CustomDrawerContent from "@/layouts/CustomDrawerContent";
import Footer from "@/layouts/footer";
import { Ionicons } from "@expo/vector-icons";
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
    headerShown: false,
    drawerActiveTintColor: 'blue',
    drawerLabelStyle: { marginLeft: -20 },
  }}
  drawerContent={(props) => <CustomDrawerContent {...props} />}
>
  <Drawer.Screen
    name="index"
    options={{
      title: "Home",
      drawerIcon: ({ color, size }) => (
        <Ionicons name="home-outline" size={size} color={color} />
      ),
    }}
  />
  <Drawer.Screen
    name="profile"
    options={{
      title: "Profile",
      drawerIcon: ({ color, size }) => (
        <Ionicons name="person-outline" size={size} color={color} />
      ),
    }}
  />
  <Drawer.Screen
    name="subjects"
    options={{
      title: "Subjects",
      drawerIcon: ({ color, size }) => (
        <Ionicons name="book-outline" size={size} color={color} />
      ),
    }}
  />
  <Drawer.Screen
    name="classes"
    options={{
      title: "Classes",
      drawerIcon: ({ color, size }) => (
        <Ionicons name="school-outline" size={size} color={color} />
      ),
    }}
  />
</Drawer>


        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RootLayout;
