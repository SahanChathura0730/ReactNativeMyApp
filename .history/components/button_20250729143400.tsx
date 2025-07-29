import React from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  minWidth?: 300; // optional min width
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style, minWidth = 120 }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-black rounded-lg py-4 px-6 shadow-md shadow-gray-700 self-center"
      style={[{ minWidth, alignSelf: "center" }, style]} // ✅ Auto width + minWidth
      activeOpacity={0.8}
    >
      <Text className="text-white text-center text-lg font-slabBold">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
