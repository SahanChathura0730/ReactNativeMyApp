import React, { useState } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface CustomInputProps extends TextInputProps {
  label: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="relative mb-6">
      {/* Floating Label */}
      <Text
        className={`absolute left-3 px-1 ${
          isFocused || props.value
            ? "-top-2 text-xs text-blue-600"
            : "top-3 text-gray-400 text-base"
        } bg-white`}
      >
        {label}
      </Text>

      {/* Input Field */}
      <TextInput
        {...props}
        className="border border-gray-300 rounded-lg p-3 text-base"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

export default CustomInput;
