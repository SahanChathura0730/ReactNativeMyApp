import React, { useEffect, useRef, useState } from "react";
import { Animated, TextInput, TextInputProps, View } from "react-native";

interface FloatingInputProps extends TextInputProps {
  label: string;
}

const FloatingInput: React.FC<FloatingInputProps> = ({ label, value, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedLabel = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedLabel, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const labelStyle = {
    position: "absolute" as const,
    left: 12,
    paddingHorizontal: 4,
    backgroundColor: "white",
    zIndex: 1,
    transform: [
      {
        translateY: animatedLabel.interpolate({
          inputRange: [0, 1],
          outputRange: [18, -10], 
        }),
      },
    ],
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: ["#9CA3AF", "#2563EB"],
    }),
  };

  return (
    <View className="relative mt-6">
      <Animated.Text style={labelStyle}>{label}</Animated.Text>
      <TextInput
        value={value}
        {...props}
        className="border border-gray-400 rounded-lg p-3 text-base"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

export default FloatingInput;
