import React from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-black rounded-lg py-4 shadow-md shadow-gray-700"
      style={style}
      activeOpacity={0.8}
    >
      <Text className="text-white text-center text-lg font-slabBold">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
