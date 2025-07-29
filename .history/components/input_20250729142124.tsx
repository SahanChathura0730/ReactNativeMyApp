import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface InputFieldProps extends TextInputProps {
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  return (
    <View className="mt-6">
      {/* Label Above Input */}
      <Text className="text-primary text-lg mb-1 font-slabBold">{label}</Text>
      <TextInput
        {...props}
        className="border border-gray-300 rounded-lg p-3 text-base"
        placeholderTextColor="#9CA3AF"
      />
    </View>
  );
};

export default InputField;
