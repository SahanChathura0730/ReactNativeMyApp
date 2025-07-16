// app/_layout.tsx
import Footer from "@/layouts/footer";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }} edges={["top", "bottom"]}>
        {/* ✅ Status bar */}
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" translucent={false} />

        {/* ✅ Drawer navigator wrapping the pages */}
        {/* <Drawer>
          <Drawer.Screen name="index" options={{ title: "Home" }} />
          <Drawer.Screen name="profile" options={{ title: "Profile" }} />
          <Drawer.Screen name="subjects" options={{ title: "Subjects" }} />
          <Drawer.Screen name="classes" options={{ title: "Classes" }} />
        </Drawer> */}

        {/* ✅ Footer (always visible) */}
        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RootLayout;
