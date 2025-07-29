import React from "react";
import "../global.css";
import AppNavigator from "./navigation/appNavigator";

const Index = () => {
  // const [fontsLoaded] = useFonts({
  //   RobotoSlab: require("../assets/fonts/RobotoSlab-VariableFont_wght.ttf"),
  // });

  // if (!fontsLoaded) return null;

  // (Text as any).defaultProps = (Text as any).defaultProps || {};
  // (Text as any).defaultProps.style = { fontFamily: "RobotoSlab" };

  return <AppNavigator />;
};

export default Index;
