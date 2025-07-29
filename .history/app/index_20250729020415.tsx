import { useFonts } from "expo-font";
import React from "react";
import { Text } from "react-native";
import "../global.css"; // Tailwind (NativeWind) CSS
import AppNavigator from "./navigation/appNavigator";

const Index = () => {
  // 1️⃣ Load the font
  const [fontsLoaded] = useFonts({
    RobotoSlab: require("../assets/fonts/RobotoSlab-VariableFont_wght.ttf"),
  });

  // 2️⃣ Wait for fonts to load
  if (!fontsLoaded) return null;

  // 3️⃣ Set global font override (TypeScript-safe using "as any")
  (Text as any).defaultProps = (Text as any).defaultProps || {};
  (Text as any).defaultProps.style = { fontFamily: "RobotoSlab" };

  // 4️⃣ Render the app navigator
  return <AppNavigator />;
};

export default Index;
