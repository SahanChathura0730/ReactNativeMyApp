import { useFonts } from "expo-font";
import React from "react";
import { Text } from "react-native";
import "../global.css"; // Tailwind CSS (NativeWind)
import AppNavigator from "./navigation/appNavigator";

const Index = () => {
  // 1️⃣ Load all Roboto Slab font weights
  const [fontsLoaded] = useFonts({
    RobotoSlabThin: require("../assets/fonts/RobotoSlab-Thin.ttf"),
    RobotoSlabLight: require("../assets/fonts/RobotoSlab-Light.ttf"),
    RobotoSlabRegular: require("../assets/fonts/RobotoSlab-Regular.ttf"),
    RobotoSlabMedium: require("../assets/fonts/RobotoSlab-Medium.ttf"),
    RobotoSlabSemiBold: require("../assets/fonts/RobotoSlab-SemiBold.ttf"),
    RobotoSlabBold: require("../assets/fonts/RobotoSlab-Bold.ttf"),
    RobotoSlabExtraBold: require("../assets/fonts/RobotoSlab-ExtraBold.ttf"),
    RobotoSlabBlack: require("../assets/fonts/RobotoSlab-Black.ttf"),
  });

  // 2️⃣ Wait until fonts are loaded
  if (!fontsLoaded) return null;

  // 3️⃣ Set global default font (Regular)
  (Text as any).defaultProps = (Text as any).defaultProps || {};
  (Text as any).defaultProps.style = { fontFamily: "RobotoSlabRegular" };

  // 4️⃣ Render App
  return <AppNavigator />;
};

export default Index;
